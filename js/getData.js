export const getData = {
    url: 'database/dataBase.json',
    get(process) {
      fetch(this.url)
          .then( res => {
              console.log(res);
          })
          .catch()
    },
}

getData.get();