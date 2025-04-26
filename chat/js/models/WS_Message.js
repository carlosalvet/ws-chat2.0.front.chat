function WS_Message() {
  this.id = 0;
  this.title = '';
  this.date = '';
  this.hour = ''
  this.user_id = '';
  this.role = 'citizen'
  this.mode = '0'
  this.body = '';
  this.image = '';
  this.username = '';


  this.set_from_arr = function (arr_line){
    this.id = arr_line[0]
    this.date = arr_line[1]
    this.role = arr_line[3]
    this.name = arr_line[4]
    this.body = arr_line[5]
  };
}
