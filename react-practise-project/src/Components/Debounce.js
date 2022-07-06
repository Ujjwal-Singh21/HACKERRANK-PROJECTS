import React from 'react'

export const Debounce = () => {

  const debouceFn = (cb, delay) => {

    let timer;

    return function (eventAsArgs) {

      if (timer) clearTimeout(timer);
    
        timer = setTimeout(() => {
          cb(eventAsArgs)
        }, delay)
    }
  }

  const handleChange = debouceFn((e) => console.log(e.target.value), 2000)

  return (
    <div>
      Enter Input: <input onChange={handleChange} />
    </div>
  )
}
