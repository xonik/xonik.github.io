(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,e,n){t.exports=n(22)},18:function(t,e,n){},20:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),s=n(5),o=n.n(s),c=n(1),u=n.n(c),i=n(2),l=n(6),p=n(7),d=n(9),f=n(8),h=n(10),m=(n(18),n(3)),g={sysexAddress:"0x00, 0x2B, 0x66",input:"./input.hex",output:"./output.sysex",keepWatching:!1},v=16,w=function(t){for(var e=[],n=0;n<t;n++)e.push(255);return e},b=function(t){var e=[];if(t instanceof Array)return t.forEach(function(t){e.push(Math.floor(t/16)),e.push((t+16)%16)}),e;var n=t;do{e.push((n+16)%16),n>>=4,e.push((n+16)%16),n>>=4}while(0!==n);return e.reverse()},x=function(t){var e=[],n=0,a=0,r=1;return t.forEach(function(t){if(":"===t.substring(0,1)){var s=function(t,e){var n=parseInt(t.substring(1,3),16),a=parseInt(t.substring(3,7),16),r=9+2*n;return{dataLength:n,address:e+a,originalAddress:a,type:parseInt(t.substring(7,9),16),data:t.substring(9,r),checksum:t.substring(r,r+2)}}(t,a),o=s.type,c=s.address,u=s.originalAddress,i=s.data,l=s.checksum;2===o?(a=16*parseInt(i,16),console.log("".concat(r," changed address offset to ").concat(a," (").concat(t,")"))):4===o?(a=65536*parseInt(i,16),n=function(t){return"0000"===t?0:"0030"===t?1:"00F0"===t?2:"0020"===t?3:-1}(i),console.log("".concat(r," changed address offset to ").concat(a,", mode: ").concat(function(t){switch(t){case 0:return"program bytes";case 1:return"user id";case 2:return"config bytes";case 3:return"eeprom bytes";default:return"unknown"}}(n)," (").concat(t,")"))):0===o?(e.push({address:c,data:function(t){for(var e=[],n=0;n<t.length;n+=2)e.push(parseInt(t.substring(n,n+2),16));return e}(i),mode:n,checksum:l}),console.log("".concat(r,", addr: 0x").concat(c.toString(16)," (").concat(c,"), orig: 0x").concat(u.toString(16),", bytes: ").concat(i.length/2,", data: ").concat(i))):1===o?console.log("EOF found, address: ".concat(c,", data: ").concat(i,", checksum: ").concat(l)):console.log("Unknown type encountered: ",o,c,i,l)}else console.log("Unknown line format encountered: ",t);r++}),console.log("Finished parsing lines"),e},y=function(t,e,n){return n-(n+t+e)%n},k=function(t,e){var n,a,r=[],s=0,o=-2;t.forEach(function(t){var n,c=function(t,e){return Math.floor(t/e)}(t.address,e);if(c!==o&&c!==o+1){if(null!=a){var u,i=y(s,0,e);if(i)(u=a.data).push.apply(u,Object(m.a)(w(i)))}a={address:s=c*e,data:[]},r.push(a)}var l,p=t.address-s;p&&(l=a.data).push.apply(l,Object(m.a)(w(p)));(n=a.data).push.apply(n,Object(m.a)(t.data)),o=function(t,e,n){return Math.floor((t+e)/n)}(t.address,t.data.length,e),s=t.address+t.data.length});var c=r[r.length-1],u=y(c.address,c.data.length,e);return(n=c.data).push.apply(n,Object(m.a)(w(u))),r},O=function(t,e){var n=[];return t.forEach(function(t){for(var a=0;a<t.data.length;a+=e){var r=t.data.slice(a,a+e);n.push({data:r,dataString:r.join(),address:t.address+a})}}),n},E=function(){var t=Object(i.a)(u.a.mark(function t(e,n){var a,r,s,o,c;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=x(e),r=a.filter(function(t){return 0===t.mode}).sort(function(t,e){return t.address-e.address}),s=k(r,n),o=O(s,n),(c=o.map(function(t){return[v].concat(Object(m.a)(b(t.address)),[17],Object(m.a)(b(t.data)))})).push([18]),t.abrupt("return",c);case 7:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),j=function(){var t=Object(i.a)(u.a.mark(function t(e){var n,a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.url,a=e.path,t.abrupt("return",fetch("".concat(n).concat(a)).then(function(t){return t.text()}));case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),S=function(){var t=g["sysexAddress"];if(null==t)return console.log("Sysex address is missing"),null;var e=t.split(",").map(function(t){return t.trim()}).map(function(t){return parseInt(t)});return 3!==e.length?(console.log("Error: Sysex address must be exactly 3 bytes long."),null):(console.log("Using sysex address ".concat(e[0],", ").concat(e[1],", ").concat(e[2])),e)},A=function(){var t=S();return null===t?null:{sysexAddress:t}},F=function(t){return new Promise(function(e){return setTimeout(e,t)})},N=function(){var t=Object(i.a)(u.a.mark(function t(e,n){var a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=0;case 1:if(!(a<e.length)){t.next=7;break}return t.next=4,n(e[a],a,e);case 4:a++,t.next=1;break;case 7:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),I=function(){var t=Object(i.a)(u.a.mark(function t(e){var n,a,r,s,o,c,l,p,d;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.sysexAddress,a=e.fileLines,r=e.output,s=e.delayBetweenBlocks,o=e.statusCallback,t.next=3,E(a,64);case 3:return c=t.sent,l=[240].concat(Object(m.a)(n)),p=[247],d=1,o("Writing"),t.next=10,N(c,function(){var t=Object(i.a)(u.a.mark(function t(e){var n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("writing part "+d),console.log(e.map(function(t){return t.toString(16)}).join("")),r&&r.write(Object(m.a)(l).concat(Object(m.a)(e),p)),n=Math.floor(1e3*d/c.length)/10,o("".concat(n,"% written")),d++,t.next=8,F(s);case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}());case 10:o("Completed"),console.log("Sysex write completed");case 12:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),M=function(){var t=Object(i.a)(u.a.mark(function t(e,n,a){var r,s,o;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=A(),t.prev=1,t.next=4,j({url:"",path:"hexfiles/"+a});case 4:return s=t.sent,o=s.split("\n"),t.next=8,I({sysexAddress:r.sysexAddress,fileLines:o,delayBetweenBlocks:300,output:e,statusCallback:n});case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.log("oh damn",t.t0);case 13:case"end":return t.stop()}},t,this,[[1,10]])}));return function(e,n,a){return t.apply(this,arguments)}}(),C=function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(d.a)(this,Object(f.a)(e).call(this))).state={midiAccess:null,outputs:[],selectedOutput:null,selectedFirmware:null,writing:!1,statusText:""},t}return Object(h.a)(e,t),Object(p.a)(e,[{key:"updateOutputs",value:function(){var t=this.state,e=t.midiAccess,n=t.selectedOutput,a=[];e.outputs.forEach(function(t){a.push(t)}),console.log("outputs",a),this.setState({outputs:a}),n&&null==e.outputs.get(n.id)&&(console.log("removing selected output"),this.setState({selectedOutput:null}))}},{key:"componentDidMount",value:function(){var t=Object(i.a)(u.a.mark(function t(){var e,n=this;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.requestMIDIAccess({sysex:!0});case 2:(e=t.sent).onstatechange=function(t){"statechange"===t.type&&"output"===t.port.type&&"open"!==t.port.connection&&(console.log("Midi access changed",t),n.updateOutputs())},this.setState({midiAccess:e}),this.updateOutputs();case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"selectOutput",value:function(t){var e=t.target.value;if("NONE"===e)console.log("No output selected"),this.setState({selectedOutput:null});else{var n=this.state.midiAccess.outputs.get(e);null!=n?(console.log("Selected output",e,n),this.setState({selectedOutput:n})):console.log("Could not select output")}}},{key:"selectFirmware",value:function(t){var e=t.target.value;"NONE"===e?(console.log("No firmware selected"),this.setState({selectedFirmware:null})):this.setState({selectedFirmware:e})}},{key:"writeFirmware",value:function(){var t=Object(i.a)(u.a.mark(function t(){var e=this;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==this.state.selectedOutput){t.next=3;break}return console.log("Cannot write, no output selected"),t.abrupt("return");case 3:return this.setState({writing:!0}),t.next=6,M({write:function(t){e.state.selectedOutput.send(t),console.log("Wrote",t)}},function(t){e.setState({statusText:t})},this.state.selectedFirmware);case 6:this.setState({writing:!1});case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=null===this.state.selectedOutput||null===this.state.selectedFirmware||this.state.writing;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("select",{onChange:function(e){return t.selectOutput(e)}},r.a.createElement("option",{value:"NONE"},"Please select a midi output"),this.state.outputs.map(function(t){return r.a.createElement("option",{key:t.id,value:t.id},t.name)})),r.a.createElement("br",null),r.a.createElement("select",{onChange:function(e){return t.selectFirmware(e)}},r.a.createElement("option",{value:"NONE"},"Then choose a firmware to upload"),r.a.createElement("option",{value:"mpg200-flash-leds.hex"},"Blink leds"),r.a.createElement("option",{value:"mpg200-instant-switch2.hex"},"MPG200 instant switch"),r.a.createElement("option",{value:"mpg200-block.hex"},"MPG200 block midi"),r.a.createElement("option",{value:"mpg200-block-no-ee.hex"},"MPG200 block midi - no load from EE")),r.a.createElement("br",null),r.a.createElement("button",{disabled:e,onClick:function(){return t.writeFirmware()}},"Write firmware"),r.a.createElement("p",null,r.a.createElement("div",null,"Status: ",this.state.statusText))))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(20);o.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.a7acb5de.chunk.js.map