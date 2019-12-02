import React from 'react';
import './PageMpg200BuildersGuide.scss';
import diodeImage from './images/1n4148.jpg';
import resistorsImage from './images/resistors.jpg';
import dilSocketsImage from './images/dil-sockets.jpg';
import transistorsVoltageRegImage from './images/transistor-voltage_reg.jpg';
import dinSocketsImage from './images/din-sockets.jpg';
import jack from './images/jack.jpg';
import jacksImage from './images/jacks.jpg';
import jackParts from './images/jack-parts.jpg';
import sixPinDin from './images/6_pin_din.png';
import jackInner from './images/jack-inner.jpg';
import ImageWithDescription from './ImageWithDescription';

export default () => {
  return <div>
    <h1>MPG-200 v6.1 Builders guide</h1>
    <p>
      The MPG-200 is an affordable replacement for the PG-200 synthesizer programmer. It is a
      protocol translator for vintage Roland synths that use the PG-200 - JX-3P, MKS-30 and GR-700.
      It translates standard midi CC-messages into the proprietary PG-200 format necessary to
      control the synths, making it possible to use a DAW, hardware midi controller or other synth
      in place of the expensive PG-200.
    </p>
    <p>
      This guide lists the parts supplied in the kit and helps you build the device.
    </p>
    <h2>Known errors</h2>
    <p>
      There are no known errors on the MPG-200 v6.1
    </p>
    <h2>Parts list</h2>
    <p>
      There are no part numbers on the circuit board, but each component is clearly labeled with
      its value and placement.
    </p>
    <p>
      Here is a list of parts included in the kit, along with some things to take into account.
    </p>
    <table className='builders-guide_parts-table'>
      <thead>
      <tr>
        <th>Count</th>
        <th>Type</th>
        <th>Value</th>
        <th>Special considerations</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>1</td>
        <td>PCB</td>
        <td>MPG-200 circuit board</td>
        <td/>
      </tr>
      <tr>
        <td>1</td>
        <td>Diode</td>
        <td>1N4148</td>
        <td>Must be put in the right way, match the black on the part with the white line on the
          PCB
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>Resistor</td>
        <td>1kOhm</td>
        <td/>
      </tr>
      <tr>
        <td>2</td>
        <td>Resistor</td>
        <td>22kOhm</td>
        <td/>
      </tr>
      <tr>
        <td>5</td>
        <td>Resistor</td>
        <td>220Ohm</td>
        <td/>
      </tr>
      <tr>
        <td>1</td>
        <td>Resistor</td>
        <td>4.7kOhm</td>
        <td/>
      </tr>
      <tr>
        <td>1</td>
        <td>DIL socket</td>
        <td>8 pin</td>
        <td>Match the half circle on the socket with the white half circle on the PCB</td>
      </tr>
      <tr>
        <td>1</td>
        <td>DIL socket</td>
        <td>14 pin</td>
        <td>Match the half circle on the socket with the white half circle on the PCB</td>
      </tr>
      <tr>
        <td>1</td>
        <td>LED</td>
        <td>3mm red</td>
        <td>Match the flat side (-) on the LED with the flat line on the PCB. The long leg of the
          LED goes into the hole labeled +. If you want to use my enclosure, make sure to bend the
          LED and solder it so that it protrudes through the hole in the enclosure. In this case you
          would also want to solder the LED last.
        </td>
      </tr>
      <tr>
        <td>1</td>
        <td>Film Capacitor</td>
        <td>100nF</td>
        <td>No particular direction, the two legs are interchangeable</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Voltage regulator</td>
        <td>78L05</td>
        <td>Match the flat side on the part with the flat side on the PCB. Make sure not to mix
          78L05, 2N3904 and 2N3906 as they look very similar.
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Transistor</td>
        <td>2N3904</td>
        <td>Match the flat side on the part with the flat side on the PCB. Make sure not to mix
          78L05, 2N3904 and 2N3906 as they look very similar.
        </td>
      </tr>
      <tr>
        <td>1</td>
        <td>Transistor</td>
        <td>2N3906</td>
        <td>Match the flat side on the part with the flat side on the PCB. Make sure not to mix
          78L05, 2N3904 and 2N3906 as they look very similar.
        </td>
      </tr>
      <tr>
        <td>1</td>
        <td>Electrolytic Capacitor</td>
        <td>10uF</td>
        <td>Match the long leg on the capacitor with the hole labeled + on the PCB. Inserting it the
          wrong way will make it explode when power is turned on.
        </td>
      </tr>
      <tr>
        <td>1</td>
        <td>Electrolytic Capacitor</td>
        <td>22uF</td>
        <td>Match the long leg on the capacitor with the hole labeled + on the PCB. Inserting it the
          wrong way will make it explode when power is turned on.
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>DIN socket</td>
        <td>5 pin (Midi)</td>
        <td/>
      </tr>
      <tr>
        <td>1</td>
        <td>DIN socket</td>
        <td>6 pin (PG-200)</td>
        <td/>
      </tr>
      <tr>
        <td>1</td>
        <td>Optocoupler</td>
        <td>6N137</td>
        <td>The dot on the IC is pin number 1 and should face in the same direction as the half
          circle on the socket.
        </td>
      </tr>
      <tr>
        <td>1</td>
        <td>Microcontroller</td>
        <td>PIC16F18325 or PIC16F15325</td>
        <td>The dot on the IC is pin number 1 and should face in the same direction as the half
          circle on the socket.
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Connectors</td>
        <td>6 pin (PG-200)</td>
        <td>Take extreme care not to overheat the pins when soldering the wires. My trick is to
          insert the pins into a potato to cool them while soldering. <strong>Overheated pins will
            melt the plastic around them, making them come loose. I cannot take responsibility for
            melted pins.</strong> PS: Remember to put the black plastic outer parts onto the cable
          before soldering the ends or you won't be able to slide them over the connector later!
        </td>
      </tr>
      <tr>
        <td>1</td>
        <td>Cable</td>
        <td>4 conductor</td>
        <td/>
      </tr>
      </tbody>
    </table>
    <h2>Part images</h2>
    <ImageWithDescription
      className="part-image"
      src={diodeImage}
      label="1N4148 diode. Black line equals line in symbol on circuit board, it is important to match up the black line on the component with the white line on the circuit board."/>
    <ImageWithDescription
      className="part-image"
      src={resistorsImage}
      label="Resistors. From the top: 1 x 4.7kOhm, 2 x 22kOhm, 3 x 1kOhm, 5 x 220Ohm. These do not have direction."/>
    <ImageWithDescription
      className="part-image"
      src={dilSocketsImage}
      label="IC sockets for MCU and 6N137 optocoupler. The dot on the IC should line up with the lower right pin in the picture. Make sure to insert the sockets according to the symbol on the circuit board."/>
    <ImageWithDescription
      className="part-image"
      src={transistorsVoltageRegImage}
      label="2N3904 and 2N3906 transistors, 78L05 voltage regulator. It may be hard to read the labeling on these but it is absolutely crucial that they are not mixed. Make sure that they are placed the right way around, the flat side of the transistor should face the flat side on the symbol on the circuit board."/>
    <ImageWithDescription
      className="part-image"
      src={dinSocketsImage}
      label="DIN sockets - One 6 pin socket for the PG-200 cable, and two 5p sockets for MIDI in and MIDI thru."/>
    <ImageWithDescription
      className="part-image"
      src={jacksImage}
      label="6 pin DIN jacks for the PG-200 cable. These are a bit hard to solder as the plastic around the pins melt if it get too hot."/>
    <h2>Assembly hints</h2>
    <p>
      In general: Take ESD measures to prevent the parts from being destroyed by static
      electricity. Wear a grounded anti-static wrist band while working. While the chances of
      breaking a part is small, I can take no responsibility for parts destroyed by ESD.
    </p>
    <p>
      Warning: no part of the device, and especially the soldered legs of the electronic parts,
      should ever touch a conducting surface while the device is plugged in. This may short circuit
      the device, possibly destroying it and/or your synth. Usage of some kind of enclosure is
      strongly recommended!
    </p>
    <p>
      Part legs should be cut as close as possible to the PCB (after soldering) to prevent them
      from touching an enclosure, should you choose to use one.
    </p>
    <p>
      Parts should preferably be soldered in the order they are listed in the parts list, this
      assures
      that low parts are added before the taller ones, making soldering easier.
    </p>
    <p>
      Integrated circuits (6N137 optocoupler and PIC16F microcontroller) should be socketed to make
      it easier to replace them in case of an error, so solder the 8p and 14 sockets and insert the
      ICs after everything else is soldered and cleaned.
    </p>
    <p>
      LED: If you want you can make the status LED visible from outside any enclosure you choose
      for your MPG-200. In that case it is probably best to mount it last when you know exactly
      where
      it should go.
    </p>
    <h2>
      MIDI thru
    </h2>
    <p>
      The solder-jumper on the underside of the circuit board connects
      Midi in and Midi out when closed (pic), effectively making a Midi thru. This is the default,
      as the MPG-200 currently does not
      output any Midi data. The jumper is there in case I come up with a super cool idea that can
      utilize Midi out in the future (The MPG-200 firmware is updatable through sysex).
    </p>
    <h2>
      Cable
    </h2>
    <p>
      The MPG-200 is connected to the synth using a 6 pin DIN connector. The cable is one-to-one,
      pin 1 is connected to pin 1 on the other end of the cable etc. The shield is not connected.
      Power is provided to the PG-200 by the synth
    </p>
    <p>
      While the PG-200 connector has 6 pins, only 4 are used by the MPG-200. Thus, the supplied
      cable only has 4 connectors. The original PG-200 uses the two last connectors for +/-15V, to
      power its opamps. You are of course free to use a 6 conductor cable if you want to make a
      PG-200 compatible cable, the four remaining conductors are wired exactly the same way for
      the PG-200 and MPG-200.
    </p>
    <p>
      The six pins are as follows:
      <ol>
        <li>-15V <strong>- Not connected on the MPG-200</strong></li>
        <li>+15V <strong>- Not connected on the MPG-200</strong></li>
        <li>+7V</li>
        <li>GND</li>
        <li>TX</li>
        <li>Busy</li>
      </ol>
    </p>
    <p>This is the pin numbering looking into the <strong>front</strong> of a female din connector,
      or similarly, from inside the male connector.</p>
    <img src={sixPinDin} alt="Six pin DIN" width="100"/>
    <p>
      It is important to keep the connector cool while soldering. If the metal pins in the
      connector get too hot, they will melt the surrounding plastic and come loose. An old trick
      is sticking the connector into a potato to cool them just enough to prevent this. I also
      find that I usually fill the hole in the pin with solder, tin the wire and then heat them
      simultaneously to make them stick together.
    </p>
    <p>
      Soldering the cable is in my opinion the hardest part of this build. Unfortunately I
      cannot take responsibility for melting connectors, so solder with care!
    </p>
    <p>
      <strong>
        PS: Before soldering the wires, remember to put the black plastic cover over the
        cable, or else you will have to desolder one end! Also, bend the other end of the metal
        shield over the cable, this acts as stress relief.</strong>
    </p>
    <ImageWithDescription
      className="part-image"
      src={jack}
      label="To open the jack, push the metal part inside the square hole down. If you bend it too much it can be bent back before putting the plastic back on."/>
    <ImageWithDescription
      className="part-image"
      src={jackParts}
      label="All parts of the jack. In my experience, filling the holes in the pins (to the left) with solder, soldering the tips of the wires and reheating everything while inserting the wires one at a time works quite well."/>
    <ImageWithDescription
      className="part-image"
      src={jackInner}
      label="Jack shield. The clamps to the right of the bottom one should be bent around the cable."/>
    <h2>
      Enclosure
    </h2>
    <p>
      There is no enclosure supplied with the MPG-200. If you build your own, make sure that the
      pins on the underside of the PCB do not touch the bottom of the enclosure, especially if
      it's made of metal. Use spacers with the screw holes, or a thick fibre tape.
    </p>
    <p>
      I am working on different enclosure options that can be purchased separately in the future.
    </p>
    <h2>
      Firmware update
    </h2>
    <p>
      The MPG-200 firmware is sysex updatable. <a href="http://www.xonik.no/bootloader/index.html">A firmware updater can be found here.</a>
    </p>
    <h2>
      Midi settings
    </h2>
    <p>
      The MPG-200 settings - what CC controls what PG-200 controller - is configurable through
      sysex. See separate instructions. <a href="http://www.xonik.no/mpg-200/sysex/mpg200.html">A sysex settings generator is available.</a>
    </p>
    <h2>General disclaimer</h2>
    <p>
      While the device has been thoroughly tested, I cannot be held responsible for the
      destruction of anything connected to the device through the Midi or PG-200 ports (i.e. your
      synth or other equipment).
    </p>
  </div>;
};