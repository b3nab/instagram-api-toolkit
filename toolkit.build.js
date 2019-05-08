"use strict";

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.replace");

require("core-js/modules/es.string.split");

require("core-js/modules/es.string.starts-with");

require("core-js/modules/es.string.trim");

require("core-js/modules/web.dom-collections.for-each");

require("regenerator-runtime/runtime");

var _enquirer = require("enquirer");

var _shelljs = _interopRequireDefault(require("shelljs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ---------------------------------------
// Wizard functions
// ---------------------------------------
var new_config =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var generators_list, generators_choices, response, config;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
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
            _context.next = 5;
            return (0, _enquirer.prompt)({
              type: 'select',
              name: 'generator',
              message: 'What generator you want to use?',
              initial: 1,
              choices: generators_choices
            });

          case 5:
            response = _context.sent;
            console.log(response);
            config = create_yaml_config(response.generator);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function new_config() {
    return _ref.apply(this, arguments);
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
    console.log('line is: ', line);

    if (line) {
      yaml_config += '#' + line;
    }
  });
  return yaml_config;
}; // ---------------------------------------
// ############     WIZARD     ###########
// ---------------------------------------


var ascii_art_welcome = "\n                            __  . .* ,\n                          ~#@#%(\" .,$ @\n                          .\"^ ';\"\n                        ..\n                        ;. :                                   . .\n                        ;==:                     ,,   ,.@#(&*.;'\n                        ;. :                   .;#$% & ^^&\n                        ;==:                   &  ......\n                        ;. :                   ,,;      :\n                        ;==:  ._______.       ;  ;      :\n                        ;. :  ;    ###:__.    ;  ;      :\n  _____________________.'  `._;       :  : __.' .'        `.__________________\n  #############################################################################\n  ########################## Instagram API Toolkit ############################\n  #############################################################################\n";

var wizard = function wizard() {
  console.log(ascii_art_welcome); // define all the command that this wizard can do
  // new config

  new_config(); // new sdk
};

wizard();
