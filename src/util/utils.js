export const toShortStr = (address)=>{
    let shortHex = address.substring(0, 6) + "..." + address.substring(38);
    return shortHex
}