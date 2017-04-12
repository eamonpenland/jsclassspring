reate a user profile object that contains properties for
name
address
city
state
zipcode
avatar
Write a function getProfileUpdate() that hypothetically asks the user to update some profile properties and returns information about which properties were changed, and to what values.(for now, just hard code the return value)
Write a function updateProfile() that takes a single object of keys:values and overwrites those keys on the profile object
Get a profile update and update the profile with it.
log the new profile


var userProfile = {
  name: null,
  address: null,
  city: null,
  state: null,
  zipcode: null,
  avatar: null,
}

function getProfileUpdate() {
  // var userKey = prompt('Which key do you want to change?');
  // var newVal = prompt('What do you want the new val to be?');
  //
  // userProfile[userKey] = newVal;
  //
  // console.log(`We changed the ${userKey} to ${newVal}`)





}

function updateProfile(obj){
  return Object.assign({}, userProfile, obj)
}


function Phone (name, weight, listPrice, purchaseState, pSSTax) {
    this.name = name;
    this.weight = weight;
    this.listPrice = listPrice;
    this.purchaseState = purchaseState;
    this.pSSTax = pSSTax
}


Phone.prototype = {
  totalPrice: function() {
    let tax = this.listPrice * this.pSSTax
    return this.listPrice + tax;
  },
  displayTag: function() {
    return `Name: ${this.name} \nTotal Price: ${this.totalPrice()}`
  }
};


let iPhone = new Phone('Iphone', '8oz', 1000, 'NC', .07)
let pixel = new Phone('Pixel', '7oz', 999, 'GA', .06)
