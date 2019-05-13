"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.map");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.replace");

require("core-js/modules/es.string.split");

require("core-js/modules/es.string.starts-with");

require("core-js/modules/es.string.trim");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

require("regenerator-runtime/runtime");

var _enquirer = require("enquirer");

var _shelljs = _interopRequireDefault(require("shelljs"));

var _chalk = _interopRequireDefault(require("chalk"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ---------------------------------------
// Wizard functions
// ---------------------------------------
var wizardChoosing =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _enquirer.prompt)({
              type: 'select',
              name: 'wizard_selection',
              message: 'What you want to do?',
              initial: 0,
              choices: ['schema', 'codegen', 'new_codegen_config', 'generate', 'new_config', 'new_generator', 'new_template', 'exit']
            });

          case 2:
            response = _context.sent;
            return _context.abrupt("return", response.wizard_selection);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function wizardChoosing() {
    return _ref.apply(this, arguments);
  };
}();

var schema =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var validate_schema, build_schema;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            validate_schema = run_cmd('yarn validate');
            console.log(validate_schema);
            build_schema = run_cmd('yarn build-schema');
            console.log(build_schema);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function schema() {
    return _ref2.apply(this, arguments);
  };
}();

var codegen =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var configs_dir, generators_list, generators_choices, gen, template, templates_choices, select_template, codegen_generator, cmd, generate_cmd;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            configs_dir = './configs/';
            generators_list = get_codegen_list();
            generators_choices = [];
            generators_list.forEach(function (x) {
              return generators_choices.push({
                name: x,
                message: x,
                value: x
              });
            });
            _context3.next = 6;
            return (0, _enquirer.prompt)([{
              type: 'autocomplete',
              name: 'generator',
              message: 'Which generator do you want to use?',
              initial: 0,
              choices: generators_choices
            }, {
              type: 'confirm',
              name: 'use_template',
              message: 'Do you want to use a custom template?'
            }]);

          case 6:
            gen = _context3.sent;
            // console.log(gen)
            template = '';

            if (!gen.use_template) {
              _context3.next = 14;
              break;
            }

            templates_choices = get_templates_list();
            _context3.next = 12;
            return (0, _enquirer.prompt)({
              type: 'select',
              name: 'template',
              message: 'Which template do you want to use?',
              choices: templates_choices
            });

          case 12:
            select_template = _context3.sent;
            template = '-t ./' + select_template.template;

          case 14:
            codegen_generator = gen.generator.split('/').pop().split('.').shift(); // const cmd = `cg ${gen.generator} -o ./sdks/${gen.generator.split('/').pop().split('.')[0]} ${template} instagram-api.bundle.json`

            cmd = "cg --verbose generators/".concat(codegen_generator, " -o sdks ").concat(template, " instagram-api.bundle.json"); // console.log('command to run...\n\n', cmd, '\n\n')

            generate_cmd = run_cmd(cmd);
            console.log(generate_cmd);

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function codegen() {
    return _ref3.apply(this, arguments);
  };
}();

var generate =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var configs_dir, generators_list, generators_choices, gen, template, templates_choices, select_template, cmd, generate_cmd;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            configs_dir = './configs/';
            generators_list = get_generators_list();
            generators_choices = [];
            generators_list.forEach(function (x) {
              return generators_choices.push({
                name: x,
                message: x,
                value: x
              });
            });
            _context4.next = 6;
            return (0, _enquirer.prompt)([{
              type: 'autocomplete',
              name: 'generator',
              message: 'Which generator do you want to use?',
              initial: 0,
              choices: generators_choices
            }, {
              type: 'confirm',
              name: 'use_template',
              message: 'Do you want to use a custom template?'
            }]);

          case 6:
            gen = _context4.sent;
            // console.log(gen)
            template = '';

            if (!gen.use_template) {
              _context4.next = 14;
              break;
            }

            templates_choices = get_templates_list();
            _context4.next = 12;
            return (0, _enquirer.prompt)({
              type: 'select',
              name: 'template',
              message: 'Which template do you want to use?',
              choices: templates_choices
            });

          case 12:
            select_template = _context4.sent;
            template = '-t ./' + select_template.template;

          case 14:
            cmd = "openapi-generator generate -i instagram-api.bundle.json -g ".concat(gen.generator, " -o ./sdks/").concat(gen.generator, " --config ./configs/").concat(gen.generator, ".yaml ").concat(template, " --skip-validate-spec");
            console.log('command to run...\n\n', cmd, '\n\n');
            generate_cmd = run_cmd(cmd);
            console.log(generate_cmd);

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function generate() {
    return _ref4.apply(this, arguments);
  };
}();

var new_codegen_config =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5() {
    var configs_dir, confs_list, configs_coice, response, config_name, config_file, overwrite_res;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            configs_dir = './generators/';
            confs_list = github_list('Mermade', 'openapi-codegen', 'configs');
            configs_coice = [];
            confs_list.forEach(function (x) {
              return configs_coice.push({
                name: x,
                message: x,
                value: x
              });
            });
            _context5.next = 6;
            return (0, _enquirer.prompt)([{
              type: 'autocomplete',
              name: 'codegen_config',
              message: 'What codegen config you want to use?',
              initial: 0,
              choices: configs_coice
            }, {
              type: 'confirm',
              name: 'overwrite_name',
              message: 'Do you want to change the default name?'
            }]);

          case 6:
            response = _context5.sent;
            // console.log(response)
            config_name = null;

            if (!response.overwrite_name) {
              _context5.next = 13;
              break;
            }

            _context5.next = 11;
            return (0, _enquirer.prompt)({
              type: 'input',
              name: 'name',
              message: 'Write the new config name:'
            });

          case 11:
            codegen_res = _context5.sent;
            config_name = codegen_res.name;

          case 13:
            config_file = _path["default"].join(configs_dir, response.codegen_config); // check if there is already a config with the same name

            if (_fs["default"].existsSync(config_file)) {
              _context5.next = 18;
              break;
            }

            // ok, write config
            create_codegen_config(response.codegen_config, config_name);
            _context5.next = 22;
            break;

          case 18:
            _context5.next = 20;
            return (0, _enquirer.prompt)({
              type: 'confirm',
              name: 'answer',
              'message': "".concat(config_file, " already exist. Do you want to overwrite the file?"),
              // default: '(Y/n)'
              initial: true
            });

          case 20:
            overwrite_res = _context5.sent;

            // console.log(typeof overwrite_res.answer)
            // console.log(overwrite_res.answer)
            if (overwrite_res.answer) {
              console.log(_chalk["default"].bgYellow(_chalk["default"].black("Overwriting ".concat(config_file, "..."))));
              create_codegen_config(response.codegen_config, config_name, true);
            }

          case 22:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function new_codegen_config() {
    return _ref5.apply(this, arguments);
  };
}();

var new_config =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6() {
    var configs_dir, generators_list, generators_choices, response, config_file, config, overwrite_res;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            configs_dir = './configs/';
            generators_list = get_generators_list();
            generators_choices = [];
            generators_list.forEach(function (x) {
              return generators_choices.push({
                name: x,
                message: x,
                value: x
              });
            });
            _context6.next = 6;
            return (0, _enquirer.prompt)({
              type: 'select',
              name: 'generator',
              message: 'What generator you want to use?',
              initial: 0,
              choices: generators_choices
            });

          case 6:
            response = _context6.sent;
            // console.log(response)
            config_file = _path["default"].join(configs_dir, response.generator + '.yaml');
            config = create_yaml_config(response.generator); // console.log(config)
            // check if there is already a config with the same name

            if (_fs["default"].existsSync(config_file)) {
              _context6.next = 13;
              break;
            }

            // ok, write config
            _fs["default"].writeFileSync(config_file, config);

            _context6.next = 19;
            break;

          case 13:
            _context6.next = 15;
            return (0, _enquirer.prompt)({
              type: 'confirm',
              name: 'answer',
              'message': "".concat(config_file, " already exist. Do you want to overwrite the file?")
            });

          case 15:
            overwrite_res = _context6.sent;
            console.log(_typeof(overwrite_res.answer));
            console.log(overwrite_res.answer);

            if (overwrite_res.answer) {
              _fs["default"].writeFileSync(config_file, config);
            }

          case 19:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function new_config() {
    return _ref6.apply(this, arguments);
  };
}();

var new_generator =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7() {
    var response;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return (0, _enquirer.prompt)([{
              type: 'input',
              name: 'name',
              message: 'The new generator name is:'
            }, {
              type: 'input',
              name: 'meta',
              message: 'add options to meta:'
            }]);

          case 2:
            response = _context7.sent;
            console.log(response);
            create_meta_generator(response.name, response.meta);

          case 5:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function new_generator() {
    return _ref7.apply(this, arguments);
  };
}();

var new_template =
/*#__PURE__*/
function () {
  var _ref8 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8() {
    var generators_list, generators_choices, response;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            generators_list = get_generators_list();
            generators_choices = [];
            generators_list.forEach(function (x) {
              return generators_choices.push({
                name: x,
                message: x,
                value: x
              });
            });
            _context8.next = 5;
            return (0, _enquirer.prompt)([{
              type: 'select',
              name: 'generator',
              message: 'Clone template from what generator?',
              initial: 0,
              choices: generators_choices
            }, {
              type: 'input',
              name: 'name',
              message: 'template name:'
            }]);

          case 5:
            response = _context8.sent;
            console.log(response);
            create_template(response.generator, response.name);

          case 8:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function new_template() {
    return _ref8.apply(this, arguments);
  };
}(); // ---------------------------------------
// helper functions
// ---------------------------------------


var run_cmd = function run_cmd(cmd) {
  console.log(_chalk["default"].bgWhite(_chalk["default"].black('Bash command: ', cmd)));
  return _shelljs["default"].exec(cmd, {
    silent: true
  }).stdout;
};

var github_download = function github_download(username, repo, path, to) {
  var isFile = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var forceDownload = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  var svn_cmd = isFile ? 'export' : 'checkout';
  var force = forceDownload ? '--force' : '';
  return run_cmd("svn ".concat(svn_cmd, " https://github.com/").concat(username, "/").concat(repo, "/trunk/").concat(path, " ").concat(to, " ").concat(force));
};

var github_list = function github_list(username, repo, path) {
  return run_cmd("svn list https://github.com/".concat(username, "/").concat(repo, "/trunk/").concat(path)).split('\n');
};

var get_generators_list = function get_generators_list() {
  var list_cmd = run_cmd('openapi-generator list');
  var generators_list = list_cmd.split('\n');
  var return_list = [];
  generators_list.forEach(function (line, index) {
    if (line.trim().startsWith('-')) {
      return_list.push(line.trim().replace('- ', ''));
    }
  }); // console.log(generators_list)
  // console.log(return_list)

  return return_list;
};

var get_list = function get_list(pathName) {
  var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return _fs["default"].readdirSync(pathName).map(function (name) {
    return _path["default"].join(pathName, name);
  }).filter(filter);
};

var isDir = function isDir(src) {
  return _fs["default"].lstatSync(src).isDirectory();
};

var isFile = function isFile(src) {
  return _fs["default"].lstatSync(src).isFile();
};

var get_codegen_list = function get_codegen_list() {
  return get_list('./generators', isFile);
};

var get_templates_list = function get_templates_list() {
  return get_list('./templates', isDir);
};

var create_yaml_config = function create_yaml_config(generator) {
  var config_help = run_cmd('openapi-generator config-help -g ' + generator);
  var lines = config_help.split('\n'); // lines.shift()//.reverse().pop().reverse()

  var yaml_config = '';
  lines.forEach(function (line) {
    // console.log('line is: ', line)
    if (line) {
      if (line.trim().indexOf(' ') === -1) {
        // is a single word, use it as a yaml variable
        yaml_config += line.trim() + ':\n';
      } else {
        yaml_config += '# ' + line.trim() + '\n\n';
      }
    }
  });
  return yaml_config;
};

var create_meta_generator = function create_meta_generator(name) {
  var other_opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var create_new_gen = run_cmd("openapi-generator meta -n ".concat(name, " -o ./generators/").concat(name, " ").concat(other_opts));
  console.log(create_new_gen);
};

var create_template = function create_template(fromGenerator, name) {
  var clone_template = github_download('OpenAPITools', 'openapi-generator', "modules/openapi-generator/src/main/resources/".concat(fromGenerator), "templates/".concat(name));
  console.log("Creating template from ".concat(fromGenerator, " with name ").concat(name, "...\n"), clone_template);
};

var create_codegen_config = function create_codegen_config(fromConfig) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var clone_template = github_download('Mermade', 'openapi-codegen', "configs/".concat(fromConfig), "generators/".concat(name || fromConfig), true, force);
  console.log("Creating codegen file config ".concat(name || fromConfig, "\n"), clone_template);
}; // ---------------------------------------
// ############     WIZARD     ###########
// ---------------------------------------


var ascii_art_welcome = "\n                            __  . .* ,\n                          ~#@#%(\" .,$ @\n                          .\"^ ';\"\n                        ..\n                        ;. :                                   . .\n                        ;==:                     ,,   ,.@#(&*.;'\n                        ;. :                   .;#$% & ^^&\n                        ;==:                   &  ......\n                        ;. :                   ,,;      :\n                        ;==:  ._______.       ;  ;      :\n                        ;. :  ;    ###:__.    ;  ;      :\n  _____________________.'  `._;       :  : __.' .'        `.__________________\n  #############################################################################\n  ########################## Instagram API Toolkit ############################\n  #############################################################################\n";

var wizard =
/*#__PURE__*/
function () {
  var _ref9 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee9() {
    var wizard_choice;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            console.log(ascii_art_welcome); // define all the command that this wizard can do

            _context9.next = 3;
            return wizardChoosing();

          case 3:
            wizard_choice = _context9.sent;
            console.log('Choise is', _chalk["default"].magentaBright(wizard_choice));

          case 5:
            if (!(wizard_choice !== 'exit')) {
              _context9.next = 35;
              break;
            }

            _context9.t0 = wizard_choice;
            _context9.next = _context9.t0 === 'schema' ? 9 : _context9.t0 === 'codegen' ? 12 : _context9.t0 === 'new_codegen_config' ? 15 : _context9.t0 === 'generate' ? 18 : _context9.t0 === 'new_config' ? 21 : _context9.t0 === 'new_generator' ? 24 : _context9.t0 === 'new_template' ? 27 : 30;
            break;

          case 9:
            _context9.next = 11;
            return schema();

          case 11:
            return _context9.abrupt("break", 30);

          case 12:
            _context9.next = 14;
            return codegen();

          case 14:
            return _context9.abrupt("break", 30);

          case 15:
            _context9.next = 17;
            return new_codegen_config();

          case 17:
            return _context9.abrupt("break", 30);

          case 18:
            _context9.next = 20;
            return generate();

          case 20:
            return _context9.abrupt("break", 30);

          case 21:
            _context9.next = 23;
            return new_config();

          case 23:
            return _context9.abrupt("break", 30);

          case 24:
            _context9.next = 26;
            return new_generator();

          case 26:
            return _context9.abrupt("break", 30);

          case 27:
            _context9.next = 29;
            return new_template();

          case 29:
            return _context9.abrupt("break", 30);

          case 30:
            _context9.next = 32;
            return wizardChoosing();

          case 32:
            wizard_choice = _context9.sent;
            _context9.next = 5;
            break;

          case 35:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function wizard() {
    return _ref9.apply(this, arguments);
  };
}();

wizard();
