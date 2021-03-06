import React from 'react';
import sixPinDin from './images/6_pin_din.png';
import pg200switches from './images/pg-200-switches.png';
import pg200tx from './images/pg-200-tx.png';

export default () => {
  return <div>
    <h1>Free the PG-200!</h1>
    <p>
      In april 2012, I decoded the PG-200 protocol. Using a Saleae logic probe I took a closer look
      at what happened while using the PG-200, and built a device that converts MIDI CC messages
      into PG-200 commands. This device, the MPG-200, also receives and transmits MIDI note
      messages, making it possible to completely control the JX-3P using MIDI.
    </p>
    <p>
      To my knowledge, at the time I started the project only two other devices existed that could
      do this - the KiwiTechnics JX-3P upgrade and Patch Editor and the Organix Midi upgrade kit.
      These both require extensive modification of the JX-3P. Later, Mode machines made a PG-200
      clone called the DT-200. I have yet to see the PG-200 protocol fully documented, but I may
      have missed something as I have not searched the web lately.
    </p>
    <p>
      As a tiny gift to the synth community in honor of my daughter's birth, I now release all the
      information I have gathered.
      This document is based on the data found in the <a
      href="/images/jx3p-service-manual.pdf" target="_blank">JX-3P/PG-200
      service manual</a> as well as a lot of work done by myself. Feel free to use it in any way
      you see fit, but I would be really happy if you acknowledged my contribution.
    </p>
    <h2>Protocol basics</h2>
    <ul>
      <li>9 bit, no parity, async serial, 31.25kHz</li>
      <li>"Start-stop"-system. To start a frame, the TX line is pulled low. When transmission has
        finished the TX line is pulled high and remains high until the next byte.
      </li>
      <li>8 value or address bits, 9th bit indicates if byte is a value/mask or an address:<br/>
        <ul>
          <li>0: Value or mask</li>
          <li>1: Address</li>
        </ul>
      </li>
      <li>Minimum time between two commands seems to be at least 17 ms</li>
      <li>Time between bytes in a command may be as little as 70 us</li>
      <li>The PG-200 has a busy-line but it doesn't seem to be used</li>
      <li>Data on the cable is inverted by the output driver transistor</li>
      <li>Address is sent for every value (or value + mask) byte. No running statuses</li>
      <li>Potentiometer values are 8 bit (0-255) unlike MIDI which is 7 bits</li>
    </ul>
    <p>
      From the service manual: Data is transfered LSB first, the 9th bit indicates data type.<br/>
      <img src={pg200tx} width="524" alt="PG-200 data transmission"/>
    </p>
    <h2>Commands</h2>
    <p>Commands are grouped into two main categories - potentiometers and switches. All the
      addresses and values described below are the data the way they are sent from the MCU. The
      signal is inverted before it is put on the wire, so to measure them correctly you have to
      setup your logic probe for an inverted signal.</p>
    <h3>Potentiometers</h3>
    <p>
      Potentiometers transmit one address and one value byte. Data is 8 bit, thus ranging from 0
      to 255<br/>
      <ul>
        <li>1: Address</li>
        <li>2: Value (0-255)</li>
      </ul>
    </p>
    <p>
      All potentiometers have addresses above 15, so it's easy to check if it is a potentiometer
      or switch that is being sent/received.
    </p>

    <p>Potentiometer addresses:</p>
    <div className="left-table">
      <table>
        <tr>
          <th>Potmeter</th>
          <th>Address</th>
        </tr>
        <tr>
          <td>Fine tune</td>
          <td>16</td>
        </tr>
        <tr>
          <td>Tune</td>
          <td>17</td>
        </tr>
        <tr>
          <td>Env amount</td>
          <td>18</td>
        </tr>
        <tr>
          <td>LFO amount</td>
          <td>19</td>
        </tr>
        <tr>
          <td>Source mix</td>
          <td>20</td>
        </tr>
        <tr>
          <td>HPF</td>
          <td>21</td>
        </tr>
        <tr>
          <td>Resonance</td>
          <td>22</td>
        </tr>
        <tr>
          <td>Cut off freq</td>
          <td>23</td>
        </tr>
        <tr>
          <td>Env mod</td>
          <td>24</td>
        </tr>
      </table>
    </div>

    <div>
      <table>
        <tr>
          <th>Potmeter</th>
          <th>Address</th>
        </tr>
        <tr>
          <td>LFO mod</td>
          <td>25</td>
        </tr>
        <tr>
          <td>Pitch follow</td>
          <td>26</td>
        </tr>
        <tr>
          <td>VCA level</td>
          <td>27</td>
        </tr>
        <tr>
          <td>LFO rate</td>
          <td>28</td>
        </tr>
        <tr>
          <td>LFO delay time</td>
          <td>29</td>
        </tr>
        <tr>
          <td>Attack</td>
          <td>30</td>
        </tr>
        <tr>
          <td>Decay</td>
          <td>31</td>
        </tr>
        <tr>
          <td>Sustain</td>
          <td>32</td>
        </tr>
        <tr>
          <td>Release</td>
          <td>33</td>
        </tr>
      </table>
    </div>
    <h3>Switches</h3>
    <p>
      Switches use one or two bits each, so several switches are grouped into one value byte with
      the same address. A bitmask is used to indicate which bits have changed (e.g. what switch
      has been moved). The mask is calculated by bitwise xor'ing the previous and the current
      state of the switch.
    </p>
    <p>
      A switch command consists of three bytes:<br/>
      <ul>
        <li>1: Group address</li>
        <li>2: Bit mask (1 where bits have changed, 0 elsewhere)</li>
        <li>3: Value</li>
      </ul>
    </p>

    <p>Switch commands. Bits in the table below are with LSB to the right.</p>

    <table>
      <tr>
        <th>Switch</th>
        <th>Group address</th>
        <th>Bits</th>
        <th>Valid values</th>
      </tr>
      <tr>
        <td>DCO 1 range</td>
        <td>0</td>
        <td>0,1</td>
        <td>
          xxxxxx00: 16'<br/>
          xxxxxx01: 8'<br/>
          xxxxxx10: 4'
        </td>
      </tr>
      <tr>
        <td>DCO 1 waveform</td>
        <td>0</td>
        <td>2,3</td>
        <td>
          xxxx00xx: Saw<br/>
          xxxx01xx: Pulse<br/>
          xxxx10xx: Square
        </td>
      </tr>
      <tr>
        <td>DCO 2 range</td>
        <td>0</td>
        <td>4,5</td>
        <td>
          xx00xxxx: 16'<br/>
          xx01xxxx: 8'<br/>
          xx10xxxx: 4'
        </td>
      </tr>
      <tr>
        <td>DCO 2 waveform</td>
        <td>0</td>
        <td>6,7</td>
        <td>
          00xxxxxx: Saw<br/>
          01xxxxxx: Pulse<br/>
          10xxxxxx: Square<br/>
          11xxxxxx: Noise
        </td>
      </tr>
      <tr>
        <td>Crossmod</td>
        <td>1</td>
        <td>0,1</td>
        <td>
          xxxxxx00: Off<br/>
          xxxxxx01: Sync<br/>
          xxxxxx10: Metal
        </td>
      </tr>
      <tr>
        <td>Env polarity, VCF</td>
        <td>1</td>
        <td>2</td>
        <td>
          0: Inverted<br/>
          1: Normal
        </td>
      </tr>
      <tr>
        <td>VCA mode</td>
        <td>1</td>
        <td>3</td>
        <td>
          0: Gate<br/>
          1: Envelope
        </td>
      </tr>
      <tr>
        <td>Env switch DCO 2</td>
        <td>1</td>
        <td>4</td>
        <td>
          0: Off<br/>
          1: On
        </td>
      </tr>
      <tr>
        <td>LFO switch DCO 2</td>
        <td>1</td>
        <td>5</td>
        <td>
          0: Off<br/>
          1: On
        </td>
      </tr>
      <tr>
        <td>Env switch DCO 1</td>
        <td>1</td>
        <td>6</td>
        <td>
          0: Off<br/>
          1: On
        </td>
      </tr>
      <tr>
        <td>LFO switch DCO 1</td>
        <td>1</td>
        <td>7</td>
        <td>
          0: Off<br/>
          1: On
        </td>
      </tr>
      <tr>
        <td>LFO waveform</td>
        <td>2</td>
        <td>0,1</td>
        <td>
          xxxxxx00: Sine<br/>
          xxxxxx01: Square<br/>
          xxxxxx10: Random
        </td>
      </tr>
      <tr>
        <td>Env polarity, DCOs</td>
        <td>2</td>
        <td>2</td>
        <td>
          0: Inverted<br/>
          1: Normal
        </td>
      </tr>
      <tr>
        <td>Chorus</td>
        <td>2</td>
        <td>3</td>
        <td>
          0: Off<br/>
          1: On
        </td>
      </tr>
    </table>
    <p>
      <br/>
      Value and address bytes are closely related to the hardware layout of the PG-200:
    </p>
    <p>
      <img src={pg200switches} width="524" alt="PG-200 switch diagram"/>
    </p>
    <p>
      The rows, P10-P13 correspond to the group addresses. The columns are read as the switch
      value. Each column is pulled high when not sunk to ground through the diodes.
    </p>
    <p>
      For example, the A-range (DCO 1 range) switch is a dual throw, three pole switch. When it is
      in the bottom position (corresponding to '16), neither DB1 or DB0 are connected to P10, and
      are thus left pulled up and read as xxxxxx11. However, in the middle position ('8), DB0 is
      pulled down when P10 goes low, but DB1 is left pulled up, reading xxxxxx10. Finally, the top
      position ('4) reads as xxxxxx01. Notice that this is the inverse of the value byte sent to
      the JX-3P, the MCU inverts the signal for some reason. It looks a bit weird, but I've double
      checked this with probes running directly from the scanlines/data input lines.
    </p>
    <h3>Special commands</h3>
    <p>
      The PG-200 sends three special commands that are not on the switch/potentiometer formats:
    </p>
    <table>
      <tr>
        <th>Command</th>
        <th>Address</th>
        <th>Value</th>
      </tr>
      <tr>
        <td>Manual</td>
        <td>130</td>
        <td>all address/value bytes (?)</td>
      </tr>
      <tr>
        <td>Write</td>
        <td>129</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Ping (sent on startup)</td>
        <td>128</td>
        <td>0</td>
      </tr>
    </table>

    <h2>The PG-200 cable</h2>
    <p>
      The PG-200 is connected to the JX-3P using a 6 pin DIN connector. The cable is one-to-one,
      pin 1 is connected to pin 1 on the other end of the cable etc. The shield is not connected.
      Power is provided to the PG-200 by the JX-3P.
    </p>
    <p>
      The six pins are as follows:<br/>
      <ul>
        <li>1: -15V</li>
        <li>2: +15V</li>
        <li>3: +7V</li>
        <li>4: GND</li>
        <li>5: TX</li>
        <li>6: Busy</li>
      </ul>
    </p>
    <p>
      This is the pin numbering looking into the front of a female din connector (image is
      borrowed from <a
      href="http://www.digitalpeer.com/blog/diy-hitec-optic-6-cable-for-phoenix-rc-simulator">digitalpeer</a>).<br/>
      <img src={sixPinDin} width="140" alt="Six pin PG-200 plug"/>
    </p>

    <h2>Gotchas</h2>
    <p>
      There are a couple of things you need to be aware of with the PG-200/JX-3P.
    </p>

    <h3>Initial ping</h3>
    <p>
      When the pg-200 starts up, it sends an initial command to tell the JX-3P that it is present.
      Without this, the JX-3P won't receive data from the pg-200.
    </p>
    <h3>MIDI vs PG-200 input</h3>
    <p>
      The JX-3P uses the same input pin on its microcontroller for receiving midi and PG-200 data.
      Both MIDI and PG-200 data is transmitted at 31.25kHz, but PG-200 uses 9 bits and midi 8. The
      interfacing electronics are also different. To know which one to expect, the JX-3P checks
      the state of the input switch.
    </p>
    <p>
      When creating a replacement for the PG-200, it is possible to automate the switching
      between modes by utilizing one of the unused pins in the MIDI cable. By doing this and
      controlling when midi and PG-200 data is sent to the JX-3P, it is possible to create a
      converter circuit that gives the JX-3P MIDI CC support. There is however a major
      problem.
    </p>
    <p>
      The JX-3P does not have a dedicated input on the MCU for the mode switch. Instead, it is
      scanned at certain intervals just like the other switches on the front panel (time
      multiplexing). This means one have to wait a while after changing the mode before
      transmitting data. If data is transmitted too soon, you will get hanging notes and other
      funny errors. Alas, this makes it impossible to efficiently use a daw to control both
      the midi notes and the midi CC at the same time without caring about timing issues. You
      may of course use the PG-200 at the same time as you play the JX-3P using the keyboard.
    </p>
    <p>
      There is no easy way around this, and this is one of the reasons other PG-200
      replacement kits require you to swap the internal MCU or ROM chip for a custom one. The
      effect may be minimized by listening to the scanline that is pulled up/down when the
      switch is read, to get as short a delay as possible between modes, but you still get a
      noteable delay. In my experience, the minimum delay between scans is 12ms while I have
      experienced delays of up to .23 seconds.
    </p>

    <p>
      Read more about the MPG-200 and my other projects on my project blog <a
      href="http://atosynth.blogspot.com" target="_blank" rel="noopener noreferrer">A to Synth</a>
    </p>
  </div>;
};