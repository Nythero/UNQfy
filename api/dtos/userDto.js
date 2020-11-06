class UserDto {
    constructor(username, tracksListened) {
      this.username = username;
      this.tracksListened = tracksListened;
    }
  
    static map(user) {
      return new UserDto(user.username, user.tracksListened);
    }
  }
  
  module.exports = UserDto;
  