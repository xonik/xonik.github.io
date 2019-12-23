import React from 'react';
import { paths } from '../../router/routes';
import { Link } from 'react-router-dom';

export default () => {
  return <div>
    <h1>MPG-200 v6 DIY Kit</h1>
    <p>
      Price: 50 EUR + postage
    </p>
    <p>
      <Link to={paths.mpg200order} title="Order here">ORDER HERE</Link>
    </p>

    <p>
      <Link to={paths.mpg200buildersGuide} title="Builders guide">Already ordered? Check out the
        builder's guide!</Link>
    </p>

    <h2>About the MPG-200</h2>
    <p>
      The MPG-200 is an affordable replacement for the PG-200 synthesizer programmer. It is a
      protocol translator for vintage Roland synths that use the PG-200 - JX-3P, MKS-30 and GR-700.
      It translates standard midi CC-messages into the proprietary PG-200 format necessary to
      control the synths, making it possible to use a DAW, hardware midi controller or
      other synth in place of the expensive PG-200.
    </p>
    <p>
      No internal modification of your synth is necessary, as the MPG-200 does a direct translation
      into the PG-200 data format.
    </p>
    <p>
      The MPG-200 comes with Midi thru, so you don't have to use a splitter if you want to control
      both
      playing and parameter noodling of your MKS-30 from the same midi source.
    </p>
    <p>
      The MPG-200 is configurable and upgradable through Midi.
    </p>
    <h2>Kit</h2>
    <p>
      The MPG-200 comes as a build it yourself kit with all the required parts, including a 60 cm
      long
      4 conductor cable (you have to solder the connectors yourself). No enclosure is included but I
      plan to offer a laser cut enclosure separately later. The MPG-200 is easy to build, having
      only
      a handfull of parts. Soldering the cable is a bit tricky but should also be manageable.
    </p>
    <h2>
      Price
    </h2>
    <p>
      The MPG-200 costs EUR 50 + postage. Postage is EUR 7 throughout Europe and EUR 8.5 to the rest
      of
      the world, untracked. Multiple MPG-200 may be shipped together for the same price, though I
      will have to check how many.
    </p>
    <p>
      Some countries may require tracked/registered mail at my discretion unless you chose to accept
      the
      risk yourself. Registered mail is about EUR 28. I will of course inform you of this before
      accepting your order.
    </p>
    <h2>
      Configuring
    </h2>
    <p>
      The MPG-200 is highly configurable through Sysex. Each parameter is mappable to any Midi CC,
      and switch range boundaries are individuably mappable for each switch.
    </p>
    <p>
      A sysex file generator can be found at <a
      href="/mpg-200-sysex/mpg200.html">xonik.no </a>. It lets you tweak
      the parameters and generate a valid configuration sysex. You can map each PG-200 parameter to
      any CC on any midi channel you like. If your browser supports WebMIDI you can even update the
      configuration directly from the browser.
    </p>
    <h2>
      Firmware
    </h2>
    <p>
      Firmware on the MPG-200 can be updated through MIDI, in case I come up with new features or
      bugs
      need to be fixed. As with the settings, an online WebMIDI-based firmware updater is found
      at <a href="/bootloader/index.html">xonik.no</a>.
    </p>
    <h2>Things to be aware of</h2>
    <p>
      There are some limitations to the MPG-200. Most importantly: Because it works exactly like the
      PG-200, it won't let you use midi for playing notes on the JX-3P at the same time as you tweak
      parameters through the MPG-200 (PS: The MKS-30 has no problem with this). This is simply not
      possible without modifying the JX-3P, and is
      the reason why you have to replace the internal CPU / ROM when upgrading the JX with a
      Kiwitechnics
      kit. I did make an MPG-200 version earlier that could take control of the "Programmer/MIDI"
      switch on the back of the JX-3P. However, even if it was possible to switch automatically, a
      delay of up to half a second after switching between midi and PG-200 was required for the
      synth
      to notice the change, making it impossible to mix the two in practice. It also made the
      MPG-200
      firmware incredibly complex as it had to buffer incoming midi to prevent lost commands while
      in
      the wrong mode. For this version I chose usability and stability over additional features.
    </p>
    <p>
      The midi thru does not filter out CC messages for the MPG-200 from the midi stream, so any
      messages will be forwarded to the MKS-30 as well. This may not be an issue though, but I have
      not
      tried flooding the MKS-30 with messages to see how it handles that. I have however left a
      possibility for adding midi message filtering later - it is possible to disconnect the midi
      thru
      from the midi input, effectively making it a midi out port instead, but this will require
      firmware changes.
    </p>
    <p>
      The provided cable has only four conductors. The original PG-200 uses six as it needs +/-15V
      to power the internal opamps. These are not needed on the MPG-200 and are therefore left out.
      This means that you cannot use the cable to replace a missing PG-200 cable. You CAN however
      get your own six conductor cable and use the provided connectors to make a PG-200 cable. More
      info about the PG-200 can be found <Link to={paths.pg200}>here</Link>.
    </p>
    <p>
      For the time being you will have to build your own enclosure, or leave the MPG-200 without
      one.
      If you choose the latter, make sure you insulate the botton to prevent it from coming into
      contact with anything conductive, this may short circuit and destroy the MPG-200. I plan on
      offering a laser cut enclosure in the future.
    </p>
    <p>
      The MPG-200 does not have any knobs or switches, it is a pure electronical protocol
      translator. You need to bring your own midi controller.
    </p>
  </div>;
};