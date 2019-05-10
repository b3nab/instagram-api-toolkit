import { prompt } from 'enquirer'
import shell from 'shelljs'
import chalk from 'chalk'
import fs from 'fs'
import path from 'path'

// ---------------------------------------
// Wizard functions
// ---------------------------------------

const wizardChoosing = async () => {
  const response = await prompt({
    type: 'select',
    name: 'wizard_selection',
    message: 'What you want to do?',
    initial: 0,
    choices: ['new_config', 'new_generator', 'exit']
  })
  // console.log(response)
  return response.wizard_selection
}

const new_config = async () => {
  const configs_dir = './configs/'
  const generators_list = get_generators_list()
  const generators_choices = []
  generators_list.forEach(x => generators_choices.push({name: x, message: x, value: x}) )
  const response = await prompt({
    type: 'select',
    name: 'generator',
    message: 'What generator you want to use?',
    initial: 1,
    choices: generators_choices
  })
  // console.log(response)
  
  const config_file = path.join(configs_dir, response.generator + '.yaml')
  const config = create_yaml_config(response.generator)
  // console.log(config)

  // check if there is already a config with the same name
  if(!fs.existsSync(config_file)) {
    // ok, write config
    fs.writeFileSync(config_file, config)
  } else {
    // overwrite file?
    const overwrite_res = await prompt({
      type: 'confirm',
      name: 'answer',
      'message': `${config_file} already exist. Do you want to overwrite the file?`
    })
    
    console.log(typeof overwrite_res.answer)
    console.log(overwrite_res.answer)
    if(overwrite_res.answer) {
      fs.writeFileSync(config_file, config)
    }
  }
}

const new_generator = async () => {
  // let name => let outputDir
  // let package (default)
  // let type
  const response = await prompt({
    type: 'select',
    name: 'generator-name',
    message: 'What generator you want to use?',
    initial: 1,
    choices: generators_choices
  })
  console.log(response)
  
  const config = create_yaml_config(response.generator)
}

// ---------------------------------------
// helper functions
// ---------------------------------------

const run_cmd = (cmd) => {
  return shell.exec(cmd, { silent: true }).stdout
}
const get_generators_list = () => {
  const list_cmd = run_cmd('openapi-generator list')
  const generators_list = list_cmd.split('\n')
  let return_list = []
  generators_list.forEach( (line, index) => {
    if(line.trim().startsWith('-')){
      return_list.push(line.trim().replace('- ', ''))
    }
  })
  // console.log(generators_list)
  // console.log(return_list)
  return return_list
}

const create_yaml_config = (generator) => {
  const config_help = run_cmd('openapi-generator config-help -g ' + generator)
  let lines = config_help.split('\n')
  // lines.shift()//.reverse().pop().reverse()
  let yaml_config = ''
  lines.forEach(line => {
    // console.log('line is: ', line)
    if(line) {
      if(line.trim().indexOf(' ') === -1) {
        // is a single word, use it as a yaml variable
        yaml_config += line.trim() + ':\n'
      } else {
        yaml_config += '# ' + line.trim() + '\n\n'
      }
    }
  })
  return yaml_config
}



// ---------------------------------------
// ############     WIZARD     ###########
// ---------------------------------------

const ascii_art_welcome = `
                            __  . .* ,
                          ~#@#%(" .,$ @
                          ."^ ';"
                        ..
                        ;. :                                   . .
                        ;==:                     ,,   ,.@#(&*.;'
                        ;. :                   .;#$% & ^^&
                        ;==:                   &  ......
                        ;. :                   ,,;      :
                        ;==:  ._______.       ;  ;      :
                        ;. :  ;    ###:__.    ;  ;      :
  _____________________.'  \`._;       :  : __.' .'        \`.__________________
  #############################################################################
  ########################## Instagram API Toolkit ############################
  #############################################################################
`

const wizard = async () => {
  console.log(ascii_art_welcome)
  // define all the command that this wizard can do
  let wizard_choice = await wizardChoosing()
  console.log('Choise is', chalk.magentaBright(wizard_choice))
  while(wizard_choice !== 'exit') {
    switch (wizard_choice) {
      case 'new_config':
      await new_config()
      break;
      case 'new_generator':
      await new_generator()
      break;
      
      default:
      break;
    }
    wizard_choice = await wizardChoosing()
  }
}

wizard()
