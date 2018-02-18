import React from "react"
import "./index.css"
import TopBar from "./TopBar"
import Messenger from "./Messenger"
import Modal from "./Modal"
import Footer from "./Footer"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render() {
    const loggedUser = { name: 'Alex' }
    const { showModal } = this.state

    return (
      <div className="app">
        <Modal
          show={showModal}
          toggleModal={this.toggleModal}
        />
        <TopBar
          toggleModal={this.toggleModal}
          user={loggedUser}
          userPosition="right"
        />
        <Messenger toggleModal={this.toggleModal} />
        <Footer />
      </div>
    )
  }
}

export default App