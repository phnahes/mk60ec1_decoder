function byteToBits(byte) {
    let binary = parseInt(byte, 16).toString(2).padStart(8, '0');
    return binary.split('').map((bit, index) => 
        `<span class="bit-box ${bit === '1' ? 'bit-on' : 'bit-off'}">${bit}</span>`).join('');
}

const lookupTable = {
    0: { /* Modelos de carro */ },
    1: { /* 7º caractere do VIN */ },
    2: { /* Freios */ },
    3: { /* 8º caractere do VIN */ },
    4: { /* Configuração do sensor de vácuo G608 e sensor de posição de direção G85 */ },
    5: "0x22 + 13º dígito VIN",
    6: function(byte) {
        let byteInt = parseInt(byte, 16);
        let transmission = byteInt & 0x0F;  
        let escBit7 = (byteInt & 0x80) ? "Permite desabilitar ESC pressionando TCS/ASR" : "";
        const transmissionTable = {
            0x00: "Padrão (FWD)",
            0x01: "Yeti 4x4 (5L) (AWD)",
            0x03: "Caddy, Caddy Maxi (2K/2C)",
            0x05: "Yeti (5L) (FWD)",
            0x08: "Leon Cupra (1P), Fusca raro (AT), Jetta NAR (AJ), Passat NMS (A3)",
            0x0E: "Touran (1T)",
            0x20: "Jetta Híbrido (AJ)"
        };
        let description = transmissionTable[transmission] || "Desconhecido";
        if (escBit7) description += ` | ${escBit7}`;
        return description;
    },
    7: "0xFA + 14º dígito VIN",
    8: "Checksum (espelho de bits) do byte 0",
    9: "0x0B + 15º dígito VIN",
    10: "Checksum (espelho de bits) do byte 2",
    11: "0xE4 + 16º dígito VIN",
    12: "Checksum (espelho de bits) do byte 4",
    13: "0x19 + 17º dígito VIN",
    14: "Checksum (espelho de bits) do byte 6",
};

function decodeLongcoding() {
    const input = document.getElementById('longcoding').value.trim().replace(/\s+/g, "");
    const bytes = input.match(/.{1,2}/g) || [];
    let output = '';
    bytes.forEach((byte, index) => {
        let description = lookupTable[index] 
            ? (typeof lookupTable[index] === 'function' ? lookupTable[index](byte) : lookupTable[index][byte] || "Desconhecido") 
            : "Desconhecido";
        let bits = byteToBits(byte); 
        output += `<tr><td>${index}</td><td>${byte}</td><td>${bits}</td><td>${description}</td></tr>`;
    });
    document.getElementById('decodedTable').innerHTML = output;
}
