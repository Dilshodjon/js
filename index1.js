const TezlikMax = 70;
const km_cheklov = 5;
const max_shtraf = 12;

tezlikShtraf(95);

function tezlikShtraf(tezlik) {
  if (tezlik < TezlikMax) console.log("ok");
  else {
    let shtraf = Math.floor((tezlik - TezlikMax) / km_cheklov);
    if (shtraf > max_shtraf) console.log("Tamom");
    else {
      console.log(shtraf);
    }
  }
}




