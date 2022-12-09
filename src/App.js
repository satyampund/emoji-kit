import { useState } from 'react'

import './App.css'

function App() {
  const [emoji, setEmoji] = useState('🥺')

  return (
    <>
      <div className="title-container">
        <h1 className="title">Emoji Kit</h1>
      </div>

      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-md-6">
            <div className="main-emoji-container py-3 mx-auto mb-5" style={{ width: '12rem' }}>
              <div className="main-emoji-item">{emoji}</div>
            </div>

            <div className=" row emoji-container mx-auto">
              <div
                className="col-lg-2 emoji mx-md-3 mb-4"
                onClick={() => {
                  setEmoji('🥺')
                }}>
                🥺
              </div>

              <div
                className="col-lg-2 emoji mx-md-3 mb-4"
                onClick={() => {
                  setEmoji('🎁')
                }}>
                🎁
              </div>

              <div
                className="col-lg-2  emoji mx-md-3 mb-4"
                onClick={() => {
                  setEmoji('🎯')
                }}>
                🎯
              </div>

              <div
                className="col-lg-2 emoji mx-md-3 mb-4"
                onClick={() => {
                  setEmoji('👨‍🎓')
                }}>
                👨‍🎓
              </div>
            </div>

            <div className=" row emoji-container mx-auto">
              <div
                className="col-lg-2 emoji mx-md-3 mb-4"
                onClick={() => {
                  setEmoji('🎈')
                }}>
                🎈
              </div>

              <div
                className="col-lg-2 emoji mx-md-3 mb-4"
                onClick={() => {
                  setEmoji('🥇')
                }}>
                🥇
              </div>

              <div
                className="col-lg-2 emoji mx-md-3 mb-4"
                onClick={() => {
                  setEmoji('💻')
                }}>
                💻
              </div>

              <div
                className="col-lg-2 emoji mx-md-3 mb-4"
                onClick={() => {
                  setEmoji('🥥')
                }}>
                🥥
              </div>
            </div>
          </div>

          <div className="col-md-6">Column</div>
        </div>
      </div>
    </>
  )
}

export default App
