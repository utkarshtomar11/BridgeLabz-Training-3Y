const userArrow = {
  name: "Utkarsh",
  showName: () => {
    console.log(this.name);
  }
};

userArrow.showName();

const user = {
  name: "Utkarsh",
  showName: function () {
    console.log(this.name);
  }
};

user.showName();
