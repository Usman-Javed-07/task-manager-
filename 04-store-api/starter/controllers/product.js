// const Product = require('../models/product')

// const getAllProuductsStatic = async (req, res) => {
//   // const search = 'ab'
//   const products = await Product.find({price: {$gt:30}}).sort('price').select('name price')
//     res.status(200).json({ products, nbHits: products.length })
//   }

//   const getAllProducts = async (req, res) => {
//     const {featured, company, name, sort, fields,numaricFilters} = req.query
//     const queryObject = {}

//     if(featured) {
//       queryObject.featured = featured === 'true' ? true : false
//     }
   
//     if(company) {
//       queryObject.company = company
//     }
//   if(name) {
//     queryObject.name = {$regex: name, $options: 'i'}
//   }

//     if(numaricFilters) {
//       const operatorMap = {
//         '>' : '$gt',
//         '>=' : '$gte',
//         '=' : '$eq',
//         '<' : '$lt',
//         '<=' : '$lte',
//       }
//       const regEx = /\b(<|>|>\>=|=|<|<=)\b/g
//       let filters = numaricFilters.replace(regEx, (match)=> `${operatorMap[match]}-`)

//       const options = ['price', 'rating']
//       filters = filters.split(',').forEach((item)=> {
//         const [ field , operator , value] = item.split('-')
//         if(options.includes(field)){
//           queryObject[field] = { [operator]: Number(value)}
//         }
//       })
//       console.log(filters);
      
//     }
//     console.log(queryObject);

//     let result = Product.find(queryObject)
//     if(sort) {
//       const sortList = sort.split(',').join(' ')
//      result = result.sort(sortList)
//     } else {
//       result = result.sort('createAt') 
//     }

//    if(fields) {
    
//     const fieldList = sort.split(',').join(' ')
//     result = result.select(fieldList)
//    }
//    const page = Number(req.query.page) || 1
//    const limit = Number(req.query.limit) || 10
//    const skip = (page - 1) * limit
//  result = result.skip(skip).limit(limit)

//     const products = await result
//     // const products = await Product.find(queryObject)
//     res.status(200).json({ products, nbHits: products.length  })
//   }
  

// module.exports = {
//     getAllProuductsStatic,
//     getAllProducts
// }













const Product = require('../models/product');

const getAllProuductsStatic = async (req, res) => {
  const products = await Product.find({ price: { $gt: 30 } }).sort('price').select('name price');
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields, numericFilters } = req.query;
  const queryObject = {};

  // Filtering logic
  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: 'i' };
  }

  // Numeric filters logic
  if (numericFilters) {
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<': '$lt',
      '<=': '$lte',
    };
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(regEx, (match) => `-${operatorMap[match]}-`);
    
    const options = ['price', 'rating'];
    filters.split(',').forEach((item) => {
      const [field, operator, value] = item.split('-');
      if (options.includes(field)) {
        queryObject[field] = { ...queryObject[field], [operator]: Number(value) };
      }
    });
    console.log('Numeric Filters Applied:', queryObject); // Console log for debugging
  }

  console.log('Query Object:', queryObject); // Console log for debugging

  // Build the query with sorting, field selection, and pagination
  let result = Product.find(queryObject);

  // Sorting logic
  if (sort) {
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList);
  } else {
    result = result.sort('createdAt');
  }

  // Field selection logic
  if (fields) {
    const fieldList = fields.split(',').join(' ');
    result = result.select(fieldList);
  }

  // Pagination logic
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);

  // Execute the query
  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProuductsStatic,
  getAllProducts,
};
