function byteToBits(byte) {
    let binary = parseInt(byte, 16).toString(2).padStart(8, '0');
    return binary.split('').map((bit, index) =>
        `<span class="bit-box ${bit === '1' ? 'bit-on' : 'bit-off'}">${bit}</span>`).join('');
}

const lookupTable = {
    0: {
        "11": "A3 (8P/FM), Bora/Golf/Jetta 5/Wagon/Vento (1K/AJ), Leon (1P), Octavia (1Z) [L0L]",
        "13": "A3 (8P/FM), Golf/Jetta (1K), Leon (1P), Octavia (1Z) [L0R]",
        "14": "A3/S3 Quattro (8P/FM), Golf/Jetta GLI/GTD/GTI/R (1K), Leon Cupra/FR (1P), Octavia vRS (1Z) [L0L]",
        "16": "A3/S3 Quattro (8P), Golf/Jetta GLI/GTD/GTI/R (1K), Leon Cupra/FR (1P), Octavia vRS (1Z) [L0R]",
        "21": "Altea XL (5P), Golf Plus (1K), Lavida (15), Toledo (5P) [E0E]",
        "23": "Altea XL (5P), Golf Plus (1K), Toledo (5P) [E0D]",
        "24": "Altea Freetrack (5P), Golf Plus Facelift (1K) [E0E]",
        "26": "Altea Freetrack (5P), Golf Plus Facelift (1K) [E0D]",
        "32": "Touran (1T) [E0E]",
        "33": "Touran (1T) [E0D]",
        "42": "Caddy (2K) [E0E]",
        "43": "Caddy (2K) [E0D]",
        "51": "Eos NAR (1F/AH)",
        "54": "Eos RoW (1F) [E0E]",
        "56": "Eos RoW (1F) [E0D]",
        "62": "Caddy Maxi (2K) [E0E]",
        "63": "Caddy Maxi (2K) [E0D]",
        "74": "Scirocco (13) [E0E]",
        "76": "Scirocco (13) [E0D]",
        "84": "Excelente (3T) [E0E]",
        "86": "Excelente (3T) [E0D]",
        "91": "Yeti (5L) [E0E]",
        "93": "Yeti (5L) [E0D]",
        "94": "Yeti (5L) com motor CFJA [E0E]",
        "96": "Yeti (5L) com motor CFJA [E0D]",
        "A1": "Jetta 6 NAR MY2013+, Híbrido (AJ), Resto do Mundo (16), Sagitar (1K)",
        "A4": "Jetta 6 NAR (AJ), Resto do Mundo (16) [E0E]",
        "A6": "Jetta 6 Resto do Mundo (16) [E0D]",
        "B1": "Jetta 6 NAR (AJ) antes do MY2013",
        "B4": "Jetta 6 Argentina/Austrália (16)",
        "C5": "Passat NMS (A3)",
        "E1": "Beetle NAR (16/AT) [L0L]",
        "E4": "Beetle RoW (16) [L0L]",
        "E6": "Beetle RoW (16) [L0R]",
        "F1": "Beetle Conversível (AT)",
        "F4": "Beetle Cabrio (16) [L0L]",
        "F6": "Beetle Cabrio (16) [L0R]"
    },
    1: {
        "3B": "7º caractere do VIN: 1",
        "3C": "7º caractere do VIN: 2",
        "3D": "7º caractere do VIN: 3",
        "3F": "7º caractere do VIN: 5",
        "42": "7º caractere do VIN: 8",
        "4B": "7º caractere do VIN: A",
        "50": "7º caractere do VIN: F"
    },
    2: {
        "20": "Freios: Dianteiro 280 mm [1ZM], Disco traseiro 253 mm [1KF/1KS]",
        "24": "Freios: Dianteiro 280 mm [1ZQ], Tambor traseiro 203 mm [1KG]",
        "40": "Freios: Dianteiro 288 mm [1ZP], Tambor ou Disco traseiro 253 mm [1KD/1KS]",
        "60": "Freios: Dianteiro 312 mm [1ZA/1ZB/1ZD/1LJ], Disco traseiro 253 mm [1KD/1KJ/1KP]",
        "80": "Freios: Dianteiro 345 mm [1ZK], Disco traseiro 310 mm [1KW]",
        "C0": "Freios: Dianteiro 312 mm, Disco traseiro 272 mm",
        "C8": "Freios: Dianteiro 312 mm, Disco traseiro 282 mm"
    },

    3: {
        "08": "8º caractere do VIN: F",
        "0A": "8º caractere do VIN: H",
        "0C": "8º caractere do VIN: J",
        "0D": "8º caractere do VIN: K",
        "0E": "8º caractere do VIN: L",
        "0F": "8º caractere do VIN: M",
        "12": "8º caractere do VIN: P",
        "16": "8º caractere do VIN: T",
        "1C": "8º caractere do VIN: Z",
        "F5": "8º caractere do VIN: 3",
        "F6": "8º caractere do VIN: 4",
        "F7": "8º caractere do VIN: 5",
        "F8": "8º caractere do VIN: 6"
    },

    4: {
        "09": "Sem G608, configuração G85 encontrada em carros com amortecedores traseiros padrão ou esportivos [1JA/1JR]",
        "0A": "Sem G608, configuração G85 encontrada em carros com amortecedores traseiros para estradas irregulares (RRD) [1JB]",
        "11": "O sensor de vácuo G608 está localizado no booster de vácuo (HBV 1K0906207)",
        "12": "O sensor de vácuo G608 está localizado no booster de vácuo + RRD",
        "19": "Configuração do Skoda Superb (3T) com unidade 3T0*",
        "21": "RRD + Sensor de vácuo no Golf GT com DSG6 e Beetle Malaysia",
        "22": "RRD + Sensor de vácuo no Golf GT Sport com DSG6",
        "49": "Sensor de posição de direção G85, localizado na unidade 16 (5K0*), lido pelo bloco 3 via UDS ou bloco 44 (cremalheira de direção) G2*. Também usado no Scirocco (13) e carros fabricados nos EUA.",
        "4A": "Algum A3 (8P) com motores 1.8 TFSI facelift",
        "51": "Sensor de vácuo G608 fabricado pela Bosch, localizado na linha de vácuo. O sinal dessa configuração é a ausência dos blocos 16 e 44 e/ou código PR 1N1",
        "52": "A3 RoW MG2009",
        "61": "Scirocco (13) com sensor de vácuo G608 na linha de vácuo",
        "89": "Golf GTI e Yeti até o ano modelo 2011",
        "C9": "Golf GTI NAR MG2010"
    },

    5: function (byte) {
        const vinDigitMapping = {
            "22": "13º dígito do VIN = 0",
            "23": "13º dígito do VIN = 1",
            "24": "13º dígito do VIN = 2",
            "25": "13º dígito do VIN = 3",
            "26": "13º dígito do VIN = 4",
            "27": "13º dígito do VIN = 5",
            "28": "13º dígito do VIN = 6",
            "29": "13º dígito do VIN = 7",
            "2A": "13º dígito do VIN = 8",
            "2B": "13º dígito do VIN = 9"
        };

        return vinDigitMapping[byte] || `13º dígito do VIN desconhecido (${byte})`;
    },


    6: function (byte) {
        const byteInt = parseInt(byte, 16); // Converte o byte hexadecimal para inteiro

        // Bits 0-3 determinam a transmissão
        const transmissionCode = byteInt & 0x0F; // Máscara para pegar apenas os 4 primeiros bits
        const transmissionTable = {
            0x00: "Padrão (FWD)",
            0x01: "Yeti 4x4 (5L) (AWD)",
            0x03: "Caddy, Caddy Maxi (2K/2C)",
            0x05: "Yeti (5L) (FWD)",
            0x08: "Leon Cupra (1P), Fusca muito raro (AT), Jetta NAR (AJ), Passat NMS (A3)",
            0x0E: "Touran (1T)",
            0x20: "Jetta Híbrido (AJ)"
        };

        let description = transmissionTable[transmissionCode] || "Desconhecido";

        // Bit 7 verifica se o ESC pode ser desativado
        if (byteInt & 0x80) {
            description += " | ⚠️ No firmware BH/BJ/BK/BL, permite desabilitar o ESC pressionando longamente o botão TCS/ASR.";
            description += " No firmware BM+, o byte 19 é usado em vez deste bit.";
            description += " Em versões anteriores a BH, bits 3 e 4 no byte 16.";
        }

        // Se o valor for 0x00, adicionar uma nota especial sobre firmware
        if (byteInt === 0x00) {
            description += `<br><span style="color: red; font-weight: bold;">⚠️ IMPORTANTE: Verifique a versão do firmware! Algumas versões o ESC pode precisar de ajustes nos bytes 16 e 19.</span>`;
        }

        return description;
    },

    7: function (byte) {
        const vinDigitMapping = {
            "FA": "14º dígito do VIN = 0",
            "FB": "14º dígito do VIN = 1",
            "FC": "14º dígito do VIN = 2",
            "FD": "14º dígito do VIN = 3",
            "FE": "14º dígito do VIN = 4",
            "FF": "14º dígito do VIN = 5",
            "00": "14º dígito do VIN = 6",
            "01": "14º dígito do VIN = 7",
            "02": "14º dígito do VIN = 8",
            "03": "14º dígito do VIN = 9"
        };
        return vinDigitMapping[byte] || `14º dígito do VIN desconhecido (${byte})`;
    },

    8: function (byte) {
        const mirroredByte0 = {
        //     "88": "Byte 0 = 11",
        //     "C8": "Byte 0 = 13",
        //     "28": "Byte 0 = 14",
        //     "68": "Byte 0 = 16",
        //     "84": "Byte 0 = 21",
        //     "C4": "Byte 0 = 23",
        //     "24": "Byte 0 = 24",
        //     "64": "Byte 0 = 26",
        //     "4C": "Byte 0 = 32",
        //     "CC": "Byte 0 = 33",
        //     "42": "Byte 0 = 42",
        //     "C2": "Byte 0 = 43",
        //     "8A": "Byte 0 = 51",
        //     "2A": "Byte 0 = 54",
        //     "6A": "Byte 0 = 56",
        //     "46": "Byte 0 = 62",
        //     "C6": "Byte 0 = 63",
        //     "2E": "Byte 0 = 74",
        //     "6E": "Byte 0 = 76",
        //     "21": "Byte 0 = 84",
        //     "61": "Byte 0 = 86",
        //     "89": "Byte 0 = 91",
        //     "C9": "Byte 0 = 93",
        //     "29": "Byte 0 = 94",
        //     "69": "Byte 0 = 96",
        //     "85": "Byte 0 = A1",
        //     "25": "Byte 0 = A4",
        //     "65": "Byte 0 = A6",
        //     "8D": "Byte 0 = B1",
        //     "2D": "Byte 0 = B4",
        //     "A3": "Byte 0 = C5",
        //     "87": "Byte 0 = E1",
        //     "27": "Byte 0 = E4",
        //     "67": "Byte 0 = E6",
        //     "8F": "Byte 0 = F1",
        //     "2F": "Byte 0 = F4",
        //     "6F": "Byte 0 = F6"
        };
        return mirroredByte0[byte] || "Bit mirrored byte 0";
    },

    9: function (byte) {
        const vinDigitMapping = {
            "0B": "15º dígito do VIN = 0",
            "0C": "15º dígito do VIN = 1",
            "0D": "15º dígito do VIN = 2",
            "0E": "15º dígito do VIN = 3",
            "0F": "15º dígito do VIN = 4",
            "10": "15º dígito do VIN = 5",
            "11": "15º dígito do VIN = 6",
            "12": "15º dígito do VIN = 7",
            "13": "15º dígito do VIN = 8",
            "14": "15º dígito do VIN = 9"
        };
        return vinDigitMapping[byte] || `15º dígito do VIN desconhecido (${byte})`;
    },

    10: function (byte) {
        const mirroredByte2 = {
            // "04": "Byte 2 = 20",
            // "24": "Byte 2 = 24",
            // "02": "Byte 2 = 40",
            // "22": "Byte 2 = 44",
            // "06": "Byte 2 = 60",
            // "01": "Byte 2 = 80",
            // "05": "Byte 2 = A0",
            // "03": "Byte 2 = C0",
            // "13": "Byte 2 = C8"
        };
        return mirroredByte2[byte] || "Bit mirrored byte 2";
    },

    11: function (byte) {
        const vinDigitMapping = {
            "E4": "16º dígito do VIN = 0",
            "E5": "16º dígito do VIN = 1",
            "E6": "16º dígito do VIN = 2",
            "E7": "16º dígito do VIN = 3",
            "E8": "16º dígito do VIN = 4",
            "E9": "16º dígito do VIN = 5",
            "EA": "16º dígito do VIN = 6",
            "EB": "16º dígito do VIN = 7",
            "EC": "16º dígito do VIN = 8",
            "ED": "16º dígito do VIN = 9"
        };
        return vinDigitMapping[byte] || `16º dígito do VIN desconhecido (${byte})`;
    },

    12: function (byte) {
        const mirroredByte4 = {
            // "90": "Byte 4 = 09",
            // "50": "Byte 4 = 0A",
            // "88": "Byte 4 = 11",
            // "48": "Byte 4 = 12",
            // "98": "Byte 4 = 19",
            // "84": "Byte 4 = 21",
            // "44": "Byte 4 = 22",
            // "92": "Byte 4 = 49",
            // "52": "Byte 4 = 4A",
            // "8A": "Byte 4 = 51",
            // "4A": "Byte 4 = 52",
            // "86": "Byte 4 = 61",
            // "91": "Byte 4 = 89",
            // "93": "Byte 4 = C9"
        };
        return mirroredByte4[byte] || "Bit mirrored byte 4";
    },

    13: function (byte) {
        const vinDigitMapping = {
            "19": "17º dígito do VIN = 0",
            "1A": "17º dígito do VIN = 1",
            "1B": "17º dígito do VIN = 2",
            "1C": "17º dígito do VIN = 3",
            "1D": "17º dígito do VIN = 4",
            "1E": "17º dígito do VIN = 5",
            "1F": "17º dígito do VIN = 6",
            "20": "17º dígito do VIN = 7",
            "21": "17º dígito do VIN = 8",
            "22": "17º dígito do VIN = 9"
        };
        return vinDigitMapping[byte] || `17º dígito do VIN desconhecido (${byte})`;
    },

    14: function (byte) {
        const mirroredByte6 = {
            // "00": "Byte 6 = 00",
            // "80": "Byte 6 = 01",
            // "C0": "Byte 6 = 03",
            // "A0": "Byte 6 = 05",
            // "10": "Byte 6 = 08",
            // "70": "Byte 6 = 0E",
            // "04": "Byte 6 = 20",
            // "01": "Byte 6 = 80",
            // "81": "Byte 6 = 81",
            // "C1": "Byte 6 = 83",
            // "A1": "Byte 6 = 85"
        };
        return mirroredByte6[byte] || "Bit mirrored byte 6";
    },

    15: function (byte) {
        let byteInt = parseInt(byte, 16);

        // Bits 0-2: Torque de partida antiderrapante
        let torqueValues = {
            0x00: "1.2TSI, 1.4TSI, 2.0TDI (PD)",
            0x01: "1.6MPI, 2.5MPI, 1.8TSI, 2.0TSI, 3.6FSI, 1.6TDI, 1.9 TDI",
            0x02: "2.0 TDI (Common-Rail)",
            0x03: "CDLD 2.0TFSI Leon Cupra",
            0x04: "CNLA 1.4TFSI Jetta Hybrid 2015+ com unidade 1K0907379BS"
        };
        let torque = torqueValues[byteInt & 0x07] || "Desconhecido";

        // Bit 3: Botão Off-Road instalado
        let offRoad = (byteInt & 0x08) ? "Botão Off-Road instalado [8LG] (Skoda Yeti 4x4)" : "";

        // Bit 4: CBC habilitado (Controle de freio em curva)
        let cbc = (byteInt & 0x10) ? "CBC (Controle de freio em curva) habilitado. No firmware BM+ esse bit tem um significado diferente! Conjunto Start-Stop [7L6]" : "";

        // Bit 5: DSR desabilitado
        let dsr = (byteInt & 0x20) ? "DSR (Driver Steering Recommendation) desabilitado. Deve ser 1 para carros americanos com bloco 44 e firmware 1K1909144L ou abaixo." : "";

        // Bits 6-7: Configuração do volante
        let steeringValues = {
            0x40: "Volante à direita [L0L]",
            0x80: "Volante à esquerda [L0R]"
        };
        let steering = steeringValues[byteInt & 0xC0] || "Configuração do volante desconhecida";

        // Construindo a descrição final
        return [
            `Torque de partida antiderrapante: ${torque}`,
            offRoad,
            cbc,
            dsr,
            steering
        ].filter(Boolean).join(" | ");
    },
    16: function (byte) {
        let byteInt = parseInt(byte, 16);

        // Bit 0: Hill Hold Control (HHC)
        let hhc = (byteInt & 0x01) ? "Hill Hold Control (HHC) [UG1/UG4] suportado em firmware AE/AJ/AP/AT/BC/BE/BG/BJ/BL/BM/BR/BS/CA/CB/CC/CE/CL" : "";

        // Bit 1: Exibição do botão TPMS SET no MFA+/MaxiDOT ou ativação do AutoHold
        let tpmsAutoHold = (byteInt & 0x02) ? "Exibição do botão TPMS SET no MFA+/MaxiDOT [7K6] ou ativa AutoHold com EPB em firmware BM+" : "";

        // Bit 2: Alerta de perda de pressão dos pneus
        let tireWarning = (byteInt & 0x04) ? "Exibição da perda de pressão nas rodas pelo painel de instrumentos RDW/TPW (Tire Pressure Warning) [7K6]. No firmware BM+, o byte 19 é usado." : "";

        // Bits 3-4: Ação do botão ESC/TCS/ASR
        let escAction = "";
        let escValue = (byteInt & 0x18) >> 3;
        switch (escValue) {
            case 0b00:
                escAction = "Botão ESC/TCS/ASR não instalado, ou firmware BH+. Desligamento do ESC configurado via byte 6 bit 7 (BH/BJ/BK/BL) ou via byte 19 (BM+)";
                break;
            case 0b01:
                escAction = "Pressionar ESC brevemente: TCS/ASR desligado | Pressionar ESC/TCS/ASR longamente: desligado (padrão em A3/S3/Golf R/Octavia vRS/Superb)";
                break;
            case 0b10:
                escAction = "Pressionar ESC brevemente: ligado | TCS/ASR desligado (padrão)";
                break;
            case 0b11:
                escAction = "Pressionar ESC brevemente: ligado | TCS/ASR desligado | Pressionar ESC longamente: ESC desligado | TCS/ASR ligado";
                break;
        }

        // Bit 5: ACC (Adaptive Cruise Control)
        let acc = (byteInt & 0x20) ? "ACC (Adaptive Cruise Control) não definido" : "ACC definido";

        // Bit 6: Desabilitação do pisca-pisca do freio de emergência
        let emergencyFlash = (byteInt & 0x40) ? "Pisca-pisca do freio de emergência desabilitado (necessário em Eos versão H31+)" : "";

        // Bit 7: Tipo de sistema ESP ou Multi-Collision Breaking (MCB)
        let espType = (byteInt & 0x80) ? "ESP com AQ250/GSG DSG [1AS] ou transmissão manual [1AZ]. No firmware BC+, este bit define o Multi-Collision Braking (MCB)"
            : "ESP com transmissão manual [1AT]";

        // Construindo a descrição final
        return [
            hhc,
            tpmsAutoHold,
            tireWarning,
            escAction,
            acc,
            emergencyFlash,
            espType
        ].filter(Boolean).join(" | ");
    },
    17: function (byte) {
        let byteInt = parseInt(byte, 16);

        // Bit 0: PLA 2.0/3.0 definido
        let pla = (byteInt & 0x01) ? "PLA 2.0/3.0 definido [7X5/7X6]" : "";

        // Bit 1: ACC Follow-To-Stop definido
        let accFollowToStop = (byteInt & 0x02) ? "ACC Follow-To-Stop definido (disponível apenas no firmware BS e CC)" : "";

        // Bit 2: RDKS/TPMS via unidade 4C virtual
        let tpms4C = (byteInt & 0x04) ? "RDKS/TPMS [7K6] via unidade 4C virtual no MFA+/MaxiDOT MG2012+" : "";

        // Bit 3: XDS habilitado
        let xds = (byteInt & 0x08) ? "XDS habilitado [UG3/UG4] (não disponível no firmware AD/AE/AN/AP/CD/CE)" : "";

        // Bits 4-7: ACC status
        let accStatus = "";
        let accValue = (byteInt & 0xF0);
        switch (accValue) {
            case 0x00:
                accStatus = "ACC não definido [8T0/8T2/8T6/8T9]";
                break;
            case 0x10:
                accStatus = "Padrão no firmware BL+ Jetta/Passat e no firmware 5C0907379C no Beetle.";
                break;
            case 0xF0:
                accStatus = "Conjunto ACC [8T3]";
                break;
            default:
                accStatus = "Configuração desconhecida para ACC";
                break;
        }

        // Construindo a descrição final
        return [
            pla,
            accFollowToStop,
            tpms4C,
            xds,
            accStatus
        ].filter(Boolean).join(" | ");
    },
    18: function (byte) {
        let byteInt = parseInt(byte, 16);
        let frontSensor = byteInt & 0x0F;  // Bits 0-3 (sensores dianteiros)
        let rearSensor = byteInt & 0xF0;   // Bits 4-7 (sensores traseiros)

        const frontSensorTable = {
            0x00: "Sensores passivos na frente",
            0x05: "Sensores ativos na frente",
            0x0F: "Sensores ativos com amplitude reversa na frente"
        };

        const rearSensorTable = {
            0x00: "Sensores passivos na traseira",
            0x50: "Sensores ativos na traseira",
            0xF0: "Sensores ativos com amplitude reversa na traseira"
        };

        let frontDescription = frontSensorTable[frontSensor] || "Configuração desconhecida para sensores dianteiros";
        let rearDescription = rearSensorTable[rearSensor] || "Configuração desconhecida para sensores traseiros";

        return `${frontDescription} | ${rearDescription}`;
    },
    19: function (byte) {
        let byteInt = parseInt(byte, 16);

        // Bits 0-1: Monitoramento da pressão dos pneus
        let tirePressureMonitor = byteInt & 0x03;
        const tirePressureTable = {
            0x00: "Sistema de monitoramento da pressão dos pneus desabilitado [7K0]",
            0x01: "RDKS+/TPMS+ habilitado [7K1]",
            0x02: "TPMS habilitado [7K6]",
            0x03: "RDKS+/TPMS+ habilitado [7K9]"
        };

        // Bit 2: Desconhecido (sempre 0)
        let bit2Unknown = (byteInt & 0x04) ? "Bit 2 inesperadamente ativado!" : "Bit 2 sempre 0 (sem função conhecida)";

        // Bit 3: BSD/Side Assist
        let bsdSideAssist = (byteInt & 0x08) ? "BSD/Side Assist habilitado (bloco 3C)" : "BSD/Side Assist não habilitado";

        // Bits 4-7: Configuração da ação do botão ESC
        let escConfig = byteInt & 0xF0;
        const escTable = {
            0x00: "Não codificado",
            0x10: "Botão ESC/TCS/ASR não instalado",
            0x20: "Pressão curta: TCS/ASR desligado",
            0x30: "Pressão curta: ESC Sport",
            0x40: "Pressão curta: ESC desligado",
            0x50: "Pressão curta: TCS/ASR desligado + ESC Sport, pressão longa: ESC desligado",
            0x60: "Pressão curta: ESC Sport, pressão longa: ESC desligado",
            0x70: "Pressão curta: TCS/ASR desligado, pressão longa: ESC desligado",
            0x80: "Pressão curta: ESC Sport, pressão longa: ESC desligado",
            0x90: "Pressão curta: TCS/ASR desligado, pressão longa: TCS/ASR desligado + ESC Sport"
        };

        let tirePressureDescription = tirePressureTable[tirePressureMonitor] || "Configuração desconhecida para monitoramento de pressão dos pneus";
        let escDescription = escTable[escConfig] || "Configuração desconhecida para ação do botão ESC";

        return `${tirePressureDescription} | ${bit2Unknown} | ${bsdSideAssist} | ${escDescription}`;
    },

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
