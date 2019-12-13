import React from 'react';
import { paths } from '../router/routes';

export default () => {
  return <div>
    <a href="http://xonik.no"><img src="images/xonik-logo.png" className="logo-image"/></a>

    <h1>Xonik Devices</h1>
    <p>
      Xonik Devices specializes in synthesizer related hardware and software. We do new designs as
      well as repairs.
    </p>
    <h2>
      Products on offer:
    </h2>
    <p>
      <ul>
        <li><a href="68b01/index.html">The Xonik 68b01 Prophet VS keyboard controller</a></li>
        <li><a href={paths.mpg200}>MPG-200, a MIDI-to-PG-200 protocol converter for the
          Roland
          JX-3P/MKS-30</a></li>
      </ul>
    </p>
    <h2>
      Articles and blogs
    </h2>
    <p>
      <ul>
        <li><a href="http://xonikfusion.tumblr.com">A mr. fusion powered Tesla model S</a></li>
        <li><a href="http://atosynth.blogspot.com">A to Synth, a project blog</a></li>
        <li><a href="http://so909.blogspot.com">So 909, a blog dedicated to the building of the
          Machinebeats TR-909 clone</a></li>
        <li><a href="mpg-200/pg-200/pg-200.html">The PG-200 protocol and pinout</a></li>
        <li><a href={paths.xm8}>The Xonik Matrix 8 polyphonic synthesizer project</a></li>
        <li><a href="tbaneklokke">T-baneklokke - a way to get your wife to stop asking when to
          leave</a></li>
        <li><a href="machinebeats">The Machinebeats analog drum synthesizer</a></li>
      </ul>
    </p>
    <h2>
      Synth theory
    </h2>
    <p>
      I have written a series of maths-heavy articles that explains the inner workings of a
      typical relaxation saw wave
      oscillator. They may be inaccurate as I wrote them to understand exactly what goes on, but
      should nicely amend the
      existing articles about temperature correction etc. found elsewhere.
    </p>
    <p>
      <ul>
        <li><a href="/theory/vco/expo_converter_1.html">The VCO - part 1: Exponential converters
          and temperature effects</a></li>
        <li><a href="/theory/vco/expo_converter_2.html">The VCO - part 2: Temperature
          compensation</a></li>
        <li><a href="/theory/vco/reference_current.html">The VCO - part 3: Constant reference
          current, saw wave generation</a></li>
        <li><a href="/theory/expo_converter/expo_converter.html">Exponential convertion - the
          useful formulas</a></li>
      </ul>
    </p>
  </div>;
};