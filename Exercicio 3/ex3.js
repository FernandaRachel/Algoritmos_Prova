/**
 * Considere CDI como uma taxa de valor constante igual a 6,50% a.a.
    • Considere IPCA como uma taxa de valor constante igual a 2,68% a.a.
    • A equivalência entre taxa diária e taxa anual é
    1+(𝑡𝑎𝑥𝑎 𝑎.𝑑.)=√1+(𝑡𝑎𝑥𝑎 𝑎.𝑎.)252
    • A fórmula de juros compostos é
    𝑇𝑎𝑥𝑎 𝑒𝑓𝑒𝑡𝑖𝑣𝑎=(1+𝑇𝑎𝑥𝑎 𝑝𝑒𝑟í𝑜𝑑𝑜)𝑄𝑡𝑑.𝑝𝑒𝑟í𝑜𝑑𝑜𝑠
 */

const CDI = 6.5;
const IPCA = 2.68;
const IPCA_ANUALY = 0.010634920634920636;
const CDI_DAY = 0.025793650793650792;

function Percent_CDI(taxa, duration) {
    var taxaCCDI = ((taxa / 100) * (CDI_DAY / 100));
    var CDI_Percent = taxaCCDI * duration;
    CDI_Percent = CDI_Percent.toFixed(8);

    console.log(parseFloat(CDI_Percent))
    return CDI_Percent
}

function Spread_CDI(taxa, duration) {
    var taxa_day = taxa / 252;
    var taxaCCDI = (taxa_day + CDI_DAY) / 100;
    var CDI_Percent = taxaCCDI * duration;
    CDI_Percent = CDI_Percent.toFixed(8);

    console.log(parseFloat(CDI_Percent))
    return CDI_Percent
}

function Spread_IPCA(taxa, duration) {
    var taxa_day = taxa / 252;
    var taxaCIPCA = (IPCA_ANUALY + taxa_day);
    var IPCA_Percent = (taxaCIPCA * duration) / 100;
    IPCA_Percent = IPCA_Percent.toFixed(8);

    console.log(parseFloat(IPCA_Percent))
    return IPCA_Percent
}
// ex 3 - b
Percent_CDI(105, 65);

// ex 3 - c
Spread_CDI(0, 252);
Spread_CDI(1.2, 85);
Spread_CDI(0.82, 517.41);

// ex 3 - d
Spread_IPCA(6.5, 104);
Spread_IPCA(0, 252);