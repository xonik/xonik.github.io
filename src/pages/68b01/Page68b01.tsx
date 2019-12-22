import React from 'react';
import { paths } from '../../router/routes';
import nono from './images/nono.jpg';
import yesyes from './images/yesyes.jpg';

export default () => {
  return <div>
    <h1>Prophet VS keyboard controller</h1>
    <p>
      Is the keyboard controller in your Prophet VS broken? Don't do this:
    </p>
    <p><img src={nono} alt="Broken controller"/></p>
    <p>do this:</p>
    <p><img src={yesyes} alt="Xonik Devices' replacement"/></p>
    <p>
      The Xonik 68b01 is a drop-in replacement for the original 68B01 keyboard controller chip.
      Though both the Xonik 68b01 and the original are microcontrollers with an internal program,
      the Xonik 68B01 is not a copy but a recreation using a modern Microchip MCU. It has the same
      velocity sensitivity as the original chip and will work straight out of the box.
    </p>
    <h2>Purchase</h2>
    <p>
      I have 8 Xonik 68b01 ready to go and several more PCBs available should these be sold out.
      Reserve yours and get a shipping quote by emailing me.
    </p>
    <p>
      Price: USD 99.00
    </p>
    <p>
      <a href={paths.contactMe}>Contact me here if you want to buy one</a>
    </p>
    <h2>Compatible synths</h2>
    <p>
      The Xonik 68b01 was developed for and has been tested with the Sequential Circuits Prophet VS.
      The original chip may be labeled "AMI 8680MAL Sequential I-626 Philipines" and has part number
      U307 in the service manual.
    </p>
    <p>
      The parts list for the Sequential Circuits MultiTrak lists the same kind of controller (U230,
      SCI Part # I-612, shown as 6801 in the service manual schematics), though I cannot guarantee
      that it works. The circuit diagram is almost identical to the Prophet VS though, so it is
      quite possible that it will work as expected.
    </p>
    <p>
      If anyone is interested in trying the chip on a MultiTrack I will refund the full price
      including shipping if it does not work. My only demand is that you destroy the chip and send
      me a picture of the
      pieces to get a refund.
    </p>
    <p>
      PS: The aftertouch mechanism is not scanned by the keyboard controller so if your aftertouch
      is broken it will NOT be fixed by this chip.
    </p>
    <h2>Recreating the 68b01</h2>
    <p>
      The chip was cloned by studying the Prophet VS service manual and connecting logic probes to a
      (partially broken) original 68b01. Monitoring the keyboard scanning cycles while listening to
      the output on the data bus made it was possible to recreate the velocity sensitivity curve
      accurately as well as decode the protocol used between the main MCU and the keyboard
      controller.
    </p>
    <p>
      External reset and crystal components present in the Prophet VS are not used as the Xonik
      68b01 has everything on board.
    </p>
  </div>;
};