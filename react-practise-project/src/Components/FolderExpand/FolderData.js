const explorer = {
  name: 'root',
  isFolder: true,
  items: [
    //obj 1 start
    {
      name: 'public',
      isFolder: true,
      items: [
        {
          name: 'public nested 1',
          isFolder: true,
          items: [
            {
              name: 'index.html',
              isFolder: false
            },
            {
              name: 'hello.html',
              isFolder: false
            }
          ]
        },
        {
          name: 'public nested file',
          isFolder: false
        }
      ]
    },
    //obj 1 ends

    //obj 2 start
    {
      name: 'src',
      isFolder: true,
      items: [
        {
          name: 'App.js',
          isFolder: false
        },
        {
          name: 'Index.js',
          isFolder: false
        },
        {
          name: 'Style.css',
          isFolder: false
        }
      ]
    },
    //obj 2 ends

    //obj 3 start
    {
      name: 'package.json',
      isFolder: false
    }
    //obj 3 end

  ] // -> end of root-items-array
}

export default explorer