"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

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
              choices: ['new_config', 'new_generator', 'exit']
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

var new_config =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var configs_dir, generators_list, generators_choices, response, config_file, config, overwrite_res;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
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
            _context2.next = 6;
            return (0, _enquirer.prompt)({
              type: 'select',
              name: 'generator',
              message: 'What generator you want to use?',
              initial: 1,
              choices: generators_choices
            });

          case 6:
            response = _context2.sent;
            // console.log(response)
            config_file = _path["default"].join(configs_dir, response.generator + '.yaml');
            config = create_yaml_config(response.generator); // console.log(config)
            // check if there is already a config with the same name

            if (_fs["default"].existsSync(config_file)) {
              _context2.next = 13;
              break;
            }

            // ok, write config
            _fs["default"].writeFileSync(config_file, config);

            _context2.next = 19;
            break;

          case 13:
            _context2.next = 15;
            return (0, _enquirer.prompt)({
              type: 'confirm',
              name: 'answer',
              'message': "".concat(config_file, " already exist. Do you want to overwrite the file?")
            });

          case 15:
            overwrite_res = _context2.sent;
            console.log(_typeof(overwrite_res.answer));
            console.log(overwrite_res.answer);

            if (overwrite_res.answer) {
              _fs["default"].writeFileSync(config_file, config);
            }

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function new_config() {
    return _ref2.apply(this, arguments);
  };
}();

var new_generator =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var response, config;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _enquirer.prompt)({
              type: 'select',
              name: 'generator-name',
              message: 'What generator you want to use?',
              initial: 1,
              choices: generators_choices
            });

          case 2:
            response = _context3.sent;
            console.log(response);
            config = create_yaml_config(response.generator);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function new_generator() {
    return _ref3.apply(this, arguments);
  };
}(); // ---------------------------------------
// helper functions
// ---------------------------------------


var run_cmd = function run_cmd(cmd) {
  return _shelljs["default"].exec(cmd, {
    silent: true
  }).stdout;
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
}; // ---------------------------------------
// ############     WIZARD     ###########
// ---------------------------------------


var ascii_art_welcome = "\n                            __  . .* ,\n                          ~#@#%(\" .,$ @\n                          .\"^ ';\"\n                        ..\n                        ;. :                                   . .\n                        ;==:                     ,,   ,.@#(&*.;'\n                        ;. :                   .;#$% & ^^&\n                        ;==:                   &  ......\n                        ;. :                   ,,;      :\n                        ;==:  ._______.       ;  ;      :\n                        ;. :  ;    ###:__.    ;  ;      :\n  _____________________.'  `._;       :  : __.' .'        `.__________________\n  #############################################################################\n  ########################## Instagram API Toolkit ############################\n  #############################################################################\n";

var wizard =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var wizard_choice;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            console.log(ascii_art_welcome); // define all the command that this wizard can do

            _context4.next = 3;
            return wizardChoosing();

          case 3:
            wizard_choice = _context4.sent;
            console.log('Choise is', _chalk["default"].magentaBright(wizard_choice));

          case 5:
            if (!(wizard_choice !== 'exit')) {
              _context4.next = 21;
              break;
            }

            _context4.t0 = wizard_choice;
            _context4.next = _context4.t0 === 'new_config' ? 9 : _context4.t0 === 'new_generator' ? 12 : 15;
            break;

          case 9:
            _context4.next = 11;
            return new_config();

          case 11:
            return _context4.abrupt("break", 16);

          case 12:
            _context4.next = 14;
            return new_generator();

          case 14:
            return _context4.abrupt("break", 16);

          case 15:
            return _context4.abrupt("break", 16);

          case 16:
            _context4.next = 18;
            return wizardChoosing();

          case 18:
            wizard_choice = _context4.sent;
            _context4.next = 5;
            break;

          case 21:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function wizard() {
    return _ref4.apply(this, arguments);
  };
}();

wizard();
