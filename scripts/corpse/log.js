function Log(list)
{
  this.list = list;
  this.term = this.list.term;
  this.time = new Desamber(this.list.date);

  this.code = this.list.code;
  this.rune = this.code.substr(0,1);
  this.sector = ["misc","audio","visual","research"][parseInt(this.code.substr(2,1))]
  this.value = parseInt(this.code.substr(3,1))
  
  this.photo = this.list.pict ? parseInt(this.list.pict) : null;

  this.is_featured = this.rune == "!" || this.rune == "~";
  this.theme = this.rune == "!" ? "blanc" : (this.rune == "~" || this.photo > 0 ? "noir" : "no_photo")
}

invoke.vessel.seal("corpse","log");