class Utilities {

    // Generates a random string for testing.
    static generateRandomString () {
      
        var messages = [ "Hello", "Mars", "foo", "bar", "Merry", "Christmas", "Happy", "Sad", "Say", "Anything" ],
            index = Math.floor(Math.random() * Math.floor(messages.length));
            
        return messages[index];        
    }
}

export default Utilities;