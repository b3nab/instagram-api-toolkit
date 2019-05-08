import { prompt } from 'enquirer'
import shell from 'shelljs'

// ---------------------------------------
// Wizard functions
// ---------------------------------------

const new_config = async () => {
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
    console.log('line is: ', line)
    if(line) {
      yaml_config += '#' + line
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

const wizard = () => {
  console.log(ascii_art_welcome)
  // define all the command that this wizard can do
  // new config
  new_config()
  // new sdk
}

wizard()
