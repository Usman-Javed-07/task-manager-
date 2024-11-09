// const getAllProuductsStatic = async (req, res) => {
//     res.status(200).json({msg : 'product testing route'})

// }
// const getAllProducts = async (req , res) => {
//     res.status(200).json ({msg : 'product route'})
// }






const getAllProuductsStatic = async (req, res) => {
    console.log('Static products route hit')
    res.status(200).json({ msg: 'product testing route' })
  }
  
  const getAllProducts = async (req, res) => {
    console.log('Products route hit')
    res.status(200).json({ msg: 'product route' })
  }
  

module.exports = {
    getAllProuductsStatic,
    getAllProducts
}