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
    choices: ['schema', 'codegen', 'new_codegen_config', 'generate', 'new_config', 'new_generator', 'new_template', 'exit']
  })
  // console.log(response)
  return response.wizard_selection
}

const schema = async () => {
  const build_schema = run_cmd('yarn validate')
  console.log(build_schema)
}

const codegen = async () => {
  const configs_dir = './configs/'
  const generators_list = get_codegen_list()
  const generators_choices = []
  generators_list.forEach(x => generators_choices.push({name: x, message: x, value: x}) )
  const gen = await prompt([
    {
      type: 'autocomplete',
      name: 'generator',
      message: 'Which generator do you want to use?',
      initial: 0,
      choices: generators_choices
    },
    {
      type: 'confirm',
      name: 'use_template',
      message: 'Do you want to use a custom template?'
    }
  ])
  // console.log(gen)

  let template = ''

  if(gen.use_template) {
    const templates_choices = get_templates_list()
    const select_template = await prompt({
      type: 'select',
      name: 'template',
      message: 'Which template do you want to use?',
      choices: templates_choices
    })
    template = '-t ./' + select_template.template
  }

  const codegen_generator = gen.generator.split('/').pop().split('.').shift()
  // const cmd = `cg ${gen.generator} -o ./sdks/${gen.generator.split('/').pop().split('.')[0]} ${template} instagram-api.bundle.json`
  const cmd = `cg --verbose generators/${codegen_generator} -o sdks ${template} instagram-api.bundle.json`
  // console.log('command to run...\n\n', cmd, '\n\n')
  const generate_cmd = run_cmd(cmd)
  console.log(generate_cmd)
}

const generate = async () => {
  const configs_dir = './configs/'
  const generators_list = get_generators_list()
  const generators_choices = []
  generators_list.forEach(x => generators_choices.push({name: x, message: x, value: x}) )
  const gen = await prompt([
    {
      type: 'autocomplete',
      name: 'generator',
      message: 'Which generator do you want to use?',
      initial: 0,
      choices: generators_choices
    },
    {
      type: 'confirm',
      name: 'use_template',
      message: 'Do you want to use a custom template?'
    }
  ])
  // console.log(gen)

  let template = ''

  if(gen.use_template) {
    const templates_choices = get_templates_list()
    const select_template = await prompt({
      type: 'select',
      name: 'template',
      message: 'Which template do you want to use?',
      choices: templates_choices
    })
    template = '-t ./' + select_template.template
  }

  const cmd = `openapi-generator generate -i instagram-api.bundle.json -g ${gen.generator} -o ./sdks/${gen.generator} --config ./configs/${gen.generator}.yaml ${template} --skip-validate-spec`
  console.log('command to run...\n\n', cmd, '\n\n')
  const generate_cmd = run_cmd(cmd)
  console.log(generate_cmd)
}

const new_codegen_config = async () => {
  const configs_dir = './generators/'
  const confs_list = github_list('Mermade', 'openapi-codegen', 'configs')
  const configs_coice = []
  confs_list.forEach(x => configs_coice.push({name: x, message: x, value: x}) )
  const response = await prompt([
    {
      type: 'autocomplete',
      name: 'codegen_config',
      message: 'What codegen config you want to use?',
      initial: 0,
      choices: configs_coice
    },
    {
      type: 'confirm',
      name: 'overwrite_name',
      message: 'Do you want to change the default name?',
    }
  ])
  // console.log(response)
  let config_name = null
  if(response.overwrite_name) {
    codegen_res = await prompt({
      type: 'input',
      name: 'name',
      message: 'Write the new config name:',
    })
    config_name = codegen_res.name
  }

  const config_file = path.join(configs_dir, response.codegen_config)
  
  // check if there is already a config with the same name
  if(!fs.existsSync(config_file)) {
    // ok, write config
    create_codegen_config(response.codegen_config, config_name)
  } else {
    // overwrite file?
    const overwrite_res = await prompt({
      type: 'confirm',
      name: 'answer',
      'message': `${config_file} already exist. Do you want to overwrite the file?`,
      // default: '(Y/n)'
      initial: true
    })
    
    // console.log(typeof overwrite_res.answer)
    // console.log(overwrite_res.answer)
    if(overwrite_res.answer) {
      console.log(chalk.bgYellow(chalk.black(`Overwriting ${config_file}...`)))
      create_codegen_config(response.codegen_config, config_name, true)
    }
  }
  // console.log(config)
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
    initial: 0,
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
  const response = await prompt([
    {
      type: 'input',
      name: 'name',
      message: 'The new generator name is:',
    },
    {
      type: 'input',
      name: 'meta',
      message: 'add options to meta:',
    },
  ])
  console.log(response)
  
  create_meta_generator(response.name, response.meta)
}

const new_template = async () => {
  const generators_list = get_generators_list()
  const generators_choices = []
  generators_list.forEach(x => generators_choices.push({ name: x, message: x, value: x }))
  const response = await prompt([
    {
      type: 'select',
      name: 'generator',
      message: 'Clone template from what generator?',
      initial: 0,
      choices: generators_choices
    },
    {
      type: 'input',
      name: 'name',
      message: 'template name:'
    }
  ])
  console.log(response)
  
  create_template(response.generator, response.name)
}

// ---------------------------------------
// helper functions
// ---------------------------------------

const run_cmd = (cmd) => {
  console.log(chalk.bgWhite(chalk.black('Bash command: ', cmd)))
  return shell.exec(cmd, { silent: true }).stdout
}

const github_download = (username, repo, path, to, isFile=false, forceDownload=false) => {
  const svn_cmd = isFile ? 'export' : 'checkout'
  const force = forceDownload ? '--force' : ''
  return run_cmd(`svn ${svn_cmd} https://github.com/${username}/${repo}/trunk/${path} ${to} ${force}`)
}

const github_list = (username, repo, path) => {
  return run_cmd(`svn list https://github.com/${username}/${repo}/trunk/${path}`).split('\n')
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

const get_list = (pathName, filter=null) => {
  return fs.readdirSync(pathName)
    .map(name => path.join(pathName, name))
    .filter(filter)
}

const isDir = src => fs.lstatSync(src).isDirectory()
const isFile = src => fs.lstatSync(src).isFile()

const get_codegen_list = () => {
  return get_list('./generators', isFile)
}
const get_templates_list = () => {
  return get_list('./templates', isDir)
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

const create_meta_generator = (name, other_opts='') => {
  const create_new_gen = run_cmd(`openapi-generator meta -n ${name} -o ./generators/${name} ${other_opts}`)
  console.log(create_new_gen)
}

const create_template = (fromGenerator, name) => {
  const clone_template = github_download('OpenAPITools', 'openapi-generator', `modules/openapi-generator/src/main/resources/${fromGenerator}`, `templates/${name}`)
  console.log(`Creating template from ${fromGenerator} with name ${name}...\n`, clone_template)
}

const create_codegen_config = (fromConfig, name=null, force=false) => {
  const clone_template = github_download('Mermade', 'openapi-codegen', `configs/${fromConfig}`, `generators/${name || fromConfig}`, true, force)
  console.log(`Creating codegen file config ${name || fromConfig}\n`, clone_template)
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
      case 'schema':
        await schema()
        break
      case 'codegen':
        await codegen()
        break
      case 'new_codegen_config':
        await new_codegen_config()
        break
      case 'generate':
        await generate()
        break
      case 'new_config':
        await new_config()
        break
      case 'new_generator':
        await new_generator()
        break
      case 'new_template':
        await new_template()
        break
    }
    wizard_choice = await wizardChoosing()
  }
}

wizard()
