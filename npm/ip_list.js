// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["IP_LIST"]},
    {"name": "IP_LIST", "symbols": ["IP"]},
    {"name": "IP_LIST$ebnf$1", "symbols": ["IP_WITH_COMMA"]},
    {"name": "IP_LIST$ebnf$1", "symbols": ["IP_LIST$ebnf$1", "IP_WITH_COMMA"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "IP_LIST", "symbols": ["IP_LIST$ebnf$1", "IP"]},
    {"name": "IP_WITH_COMMA", "symbols": ["IP", {"literal":","}]},
    {"name": "IP", "symbols": ["NUMBER", {"literal":"."}, "NUMBER", {"literal":"."}, "NUMBER", {"literal":"."}, "NUMBER"]},
    {"name": "NUMBER", "symbols": ["From_0_to_255"]},
    {"name": "From_0_to_255", "symbols": [/[0-9]/]},
    {"name": "From_0_to_255", "symbols": [/[1-9]/, /[0-9]/]},
    {"name": "From_0_to_255", "symbols": [{"literal":"1"}, /[0-9]/, /[0-9]/]},
    {"name": "From_0_to_255", "symbols": [{"literal":"2"}, /[0-5]/, /[0-5]/]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
