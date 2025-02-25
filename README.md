# ABS MK60EC1 Longcoding Decoder

## Overview
This project is a **longcoding decoder** for the **MK60EC1 ABS module**, widely used in **VAG vehicles** (Volkswagen, Audi, Seat, Skoda). It interprets the hexadecimal longcoding and translates it into **human-readable descriptions**, helping users understand the module's configuration.

To access: 
https://phnahes.github.io/mk60ec1_decoder/

## Features
- **Byte-by-byte and bit-by-bit decoding** of MK60EC1 longcoding.
- **Detailed lookup tables** for each byte's meaning.
- **Automatic bit mirroring checks** for relevant bytes.
- **Interactive web interface** for easy decoding.
- **Responsive and user-friendly design.**

## How It Works
1. The user inputs the **longcoding string** (hexadecimal format).
2. The script automatically **splits the string into bytes** and maps each byte to a **predefined lookup table**.
3. Each byte is analyzed, and its corresponding **values, bits, and descriptions** are displayed.
4. For bytes that use **bit-level settings**, each bit's state (0 or 1) is represented visually.
5. Certain bytes include **important firmware-related warnings** that might require additional user attention.

## Byte Decoding
- **Byte 0**: Vehicle model, brake master cylinder size, steering location.
- **Byte 1**: 7th character of the **VIN**.
- **Byte 2**: Front and rear brakes setup.
- **Byte 3**: 8th character of the **VIN**.
- **Byte 4**: Configuration of **vacuum sensor (G608) and steering angle sensor (G85)**.
- **Byte 5**: 13th **VIN digit** calculation.
- **Byte 6**: **Transmission type and ESC disable functionality**.
- **Byte 7-14**: VIN and bit-mirrored checksums.
- **Byte 15**: **Traction control settings, off-road mode, CBC, DSR, and steering wheel position**.
- **Byte 16**: **Hill Hold Control (HHC), TPMS settings, ESC button behavior, and emergency brake blinking**.
- **Byte 17**: **PLA (Parking Assist), ACC, TPMS, and XDS settings**.
- **Byte 18**: **ABS sensor type configuration**.
- **Byte 19**: **Tire Pressure Monitoring System (TPMS), BSD (Side Assist), and ESC button configuration**.

## Sources & References
The decoding logic is based on research and community knowledge, with major references including:
- **[Drive2.ru - MK60EC1 Longcoding Reference](https://www.drive2.ru/l/623620456359922967/)**

## How to Use
1. **Open the web page** with the decoder interface.
2. **Enter the longcoding string** (hexadecimal format) in the input field.
3. **Click the decode button** to process the longcoding.
4. **Analyze the output table**, which includes:
   - Byte **index**
   - **Hex value**
   - **Binary representation**
   - **Decoded meaning**
5. **Cross-check firmware-specific notes** if needed for your configuration.

## License
This project is open-source and intended for **educational and diagnostic purposes only**. The author is not responsible for incorrect settings or modifications applied based on the decoding results.

---

For contributions or further improvements, feel free to **fork the project** or **submit pull requests**. 🚀
