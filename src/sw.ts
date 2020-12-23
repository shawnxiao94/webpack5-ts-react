/*
 * @Author: your name
 * @Date: 2020-12-22 17:41:51
 * @LastEditTime: 2020-12-22 17:42:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-react-hooks-webpack/src/sw.ts
 */
export default function registerServiceWorker() {
  if ('serviceWorker' in navigator && process.env.APP_ENV !== 'dev') {
    window.addEventListener('load', () => {
      const { serviceWorker } = navigator
      serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('SW registered: ', registration)
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError)
        })
    })
  }
}