import PickingSchema from "../models/picking.js";
import mongoose from "mongoose";
import Expenses from "../models/expenses.js";

// export const polulateDB = async(req, res) => {
//   const pickings = await Expenses.insertMany(
//     [
//       {
//           "_id": "65392d40de9bfb015ef48517",
//           "expenseType": "Picking Wage",
//           "narration": "70.5 kgs @ Ksh 12/kg.",
//           "amount": 846,
//           "status": "PENDING",
//           "createdAt": "2023-10-25T14:59:12.769Z",
//           "updatedAt": "2023-10-25T14:59:12.769Z",
//           "__v": 0
//       },
//       {
//           "_id": "652a8b1ba37d2268fe83a497",
//           "expenseType": "Picking Wage",
//           "narration": "35 kgs @ Ksh 12/kg.",
//           "amount": 420,
//           "status": "PAID",
//           "createdAt": "2023-10-14T12:35:39.144Z",
//           "updatedAt": "2023-10-17T07:24:28.438Z",
//           "__v": 0
//       },
//       {
//           "_id": "65215c8c9ff2fd949934d978",
//           "expenseType": "Picking Wage",
//           "narration": "30.6 kgs @ Ksh 12/kg.",
//           "amount": 367.20000000000005,
//           "status": "PAID",
//           "createdAt": "2023-10-07T13:26:36.218Z",
//           "updatedAt": "2023-10-13T14:57:10.787Z",
//           "__v": 0
//       },
//       {
//           "_id": "65184774bee7d08c0ff02128",
//           "expenseType": "Picking Wage",
//           "narration": "68 kgs @ Ksh 12/kg.",
//           "amount": 816,
//           "status": "PAID",
//           "createdAt": "2023-09-30T16:06:12.574Z",
//           "updatedAt": "2023-10-02T11:57:07.083Z",
//           "__v": 0
//       },
//       {
//           "_id": "650ef687a06ec5b9e02cbf9e",
//           "expenseType": "Picking Wage",
//           "narration": "164 kgs @ Ksh 12/kg.",
//           "amount": 1968,
//           "status": "PENDING",
//           "createdAt": "2023-09-23T14:30:31.783Z",
//           "updatedAt": "2023-09-23T14:30:31.783Z",
//           "__v": 0
//       },
//       {
//           "_id": "64f7322e8b53e571debcc543",
//           "expenseType": "Weeding",
//           "narration": "Weeding the whole plantation ",
//           "amount": 1500,
//           "status": "PENDING",
//           "createdAt": "2023-09-05T13:50:38.705Z",
//           "updatedAt": "2023-09-05T13:50:38.705Z",
//           "__v": 0
//       },
//       {
//           "_id": "64edcef13d140aa2319cacbb",
//           "expenseType": "Picking Wage",
//           "narration": "14.5 kgs @ Ksh 12/kg.",
//           "amount": 174,
//           "status": "PAID",
//           "createdAt": "2023-08-29T10:56:49.894Z",
//           "updatedAt": "2023-09-05T13:51:00.228Z",
//           "__v": 0
//       },
//       {
//           "_id": "64e774b9b3ba661bacf376d2",
//           "expenseType": "TBC Charges",
//           "narration": "Tbc hanging charges",
//           "amount": 440,
//           "status": "PAID",
//           "createdAt": "2023-08-24T15:18:17.341Z",
//           "updatedAt": "2023-08-25T02:00:42.649Z",
//           "__v": 0
//       },
//       {
//           "_id": "64e77489b3ba661bacf376d0",
//           "expenseType": "Picking Wage",
//           "narration": "80 kgs @ Ksh 12/kg.",
//           "amount": 960,
//           "status": "PAID",
//           "createdAt": "2023-08-24T15:17:29.115Z",
//           "updatedAt": "2023-08-25T02:00:24.667Z",
//           "__v": 0
//       },
//       {
//           "_id": "64dcb766c80ce5f8f7e39ed4",
//           "expenseType": "Weeding",
//           "narration": "Spraying and weeding expenses ",
//           "amount": 1000,
//           "status": "PENDING",
//           "createdAt": "2023-08-16T11:47:50.489Z",
//           "updatedAt": "2023-08-16T11:47:50.489Z",
//           "__v": 0
//       },
//       {
//           "_id": "64cd1328f8604d24f401b85d",
//           "expenseType": "Picking Wage",
//           "narration": "42 kgs @ Ksh 12/kg.",
//           "amount": 504,
//           "status": "PAID",
//           "createdAt": "2023-08-04T15:03:04.857Z",
//           "updatedAt": "2023-08-06T14:40:01.095Z",
//           "__v": 0
//       },
//       {
//           "_id": "64bd2ba4626dbb74cd94c13d",
//           "expenseType": "Picking Wage",
//           "narration": "34 kgs @ Ksh 12/kg.",
//           "amount": 408,
//           "status": "PAID",
//           "createdAt": "2023-07-23T13:31:16.770Z",
//           "updatedAt": "2023-07-23T13:32:52.071Z",
//           "__v": 0
//       },
//       {
//           "_id": "64b79c2d4f3cd32afe549618",
//           "expenseType": "Picking Wage",
//           "narration": "Various days @ ksh 12/kg",
//           "amount": 12993.6,
//           "status": "PAID",
//           "createdAt": "2023-04-19T08:17:49.696Z",
//           "updatedAt": "2023-07-19T11:47:39.127Z",
//           "__v": 0
//       },
//       {
//           "_id": "64b41bf07b9092892adb9519",
//           "expenseType": "TBC Charges",
//           "narration": "Hanging charges",
//           "amount": 1380,
//           "status": "PAID",
//           "createdAt": "2023-07-16T16:33:52.855Z",
//           "updatedAt": "2023-07-16T16:34:08.582Z",
//           "__v": 0
//       },
//       {
//           "_id": "64b419f87b9092892adb94fd",
//           "expenseType": "Pruning",
//           "narration": "540 bushes @ Ksh 3.50",
//           "amount": 1890,
//           "status": "PAID",
//           "createdAt": "2023-07-16T16:25:28.408Z",
//           "updatedAt": "2023-07-16T16:31:25.117Z",
//           "__v": 0
//       },
//       {
//           "_id": "64b419097b9092892adb94f1",
//           "expenseType": "Top Dressing",
//           "narration": "Application of fertilizer. ",
//           "amount": 300,
//           "status": "PAID",
//           "createdAt": "2023-07-16T16:21:29.733Z",
//           "updatedAt": "2023-07-16T16:23:15.384Z",
//           "__v": 0
//       }
//   ]
//   );
//   res.status(201).json(pickings);
// }

// polulateDB()

export const getOnePick = async(req, res) => {
    const { id: _id } = req.params;

    try {
        const data = await PickingSchema.findById(_id);
        res.status(201).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPicked = async(req, res) => {

    try {
        const data = await PickingSchema.find().sort({_id: -1});
        
        res.status(200).send(data);
        
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

export const createPicked = async(req, res) => {
    const { weight } = req.body;

    try {
        const newPick = new PickingSchema({ weight });
        await newPick.save();
    
        res.status(200).json(newPick);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const updatePick = async( req, res ) => {
    const { id: _id } = req.params;
    const pick = req.body;

    // console.log(_id, weight);
    try {
         if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json(`The id is invalid`);
         
         const updatedPick =  await PickingSchema.findByIdAndUpdate(_id, { ...pick, _id}, { new: true });

         res.status(200).json(updatedPick);
                
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const deletePick = async(req,res) => {
    const { id: _id } = req.params;

    // console.log(_id)

    try {
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({ "message": "The id is invalid"});

        await PickingSchema.findByIdAndDelete(_id);
        
        res.status(200).json({ "massage": "deleted successfully"});
    } catch (error) {
        // console.log(error);
        res.status(404).json({ message: error.message });
    }
}

export const getOneExpense = async(req, res) => {
  const { id: _id } = req.params;

  try {
    const data = await Expenses.findById(_id);

    // console.log(data)
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

export const getExpenses = async(req, res) => {
  // console.log('here')
  try {
    const data = await Expenses.find().sort({ _id: -1 });

    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}


export const createExpense = async(req, res) => {
  const { expenseType, amount, narration, status } = req.body;

  try {
    const expenseData =  new Expenses({ expenseType, amount, narration, status });

    await expenseData.save();

    res.status(200).json(expenseData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `A server error occurred` })
  }
}

export const updateExpense = async(req, res) => {
  const { id: _id } = req.params;
  const data = req.body;

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(400).json({ message: `Not a valid MongoDb ID` });

  try {

    const updatedExpense = await Expenses.findByIdAndUpdate(_id, { ...data, _id }, { new: true });

    res.status(200).send(updatedExpense);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });    
  }
}

export const deleteExpense = async(req, res) => {
  // console.log('here')
  const { id: _id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(400).json({ message: 'Not a valid MongoDB ID' });

  try {
    await Expenses.findByIdAndDelete(_id);

    res.status(200).json({ message: 'Expense deleted successfully' });     
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

export const monthlyTotals = async(req, res) => {
    const { startDate, endDate } = req.body;
    const now = new Date();
    const month = now.getMonth() + 1;
    const year = now.getFullYear()
    const annualStartDate = (now.getMonth() < 6 ) ? new Date(` 07-01-${ year - 1 } 00:00:00 GMT`) : new Date(` 07-01-${ year } 00:00:00 GMT`);

    try {
      const data = await PickingSchema.aggregate(
          [
              {
                '$match': {
                  'createdAt': {
                    '$gte': new Date(startDate), 
                    '$lte': new Date(endDate)
                  }
                }
              }, {
                '$group': {
                  '_id': {
                    '$cond': [
                      {
                        'lt': ''
                      },
                       `${ startDate } - ${ endDate }`, '0'
                    ]
                  }, 
                  'total': {
                    '$sum': '$weight'
                  }
                }
              }
            ]
      );

        const eachMonthTotals = await PickingSchema.aggregate([
          {
            $match: { 'createdAt': {
              '$gte': new Date(startDate),
              '$lte': new Date(endDate)
            }}
          },
          {
            $group: {
              _id: { 
                 $month: '$createdAt' ,
              },
              weight: { $sum: '$weight'},
            }
          },{
            
            $sort: { _id: 1}
          }
        ]);

        // console.log(startDate, endDate);
      // console.log(eachMonthTotal);

        res.status(200).json( eachMonthTotals );
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
}

export const groupByMonth = async(req, res) => {
  // const { startDate, endDate } = req.body;
  const now = new Date();
  // const oneYr = new Date(now - (365*24*60*60*1000))
  // const endDate = new Date(`Wed, 30 June 2023 23:59:46 GMT`);
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const  monthlyStartDate = new Date(` 0${ month }-01-${ year } 00:00:00 GMT`);
  const annualStartDate = (now.getMonth() < 6 ) ? new Date(` 07-01-${ year - 1 } 00:00:00 GMT`) : new Date(` 07-01-${ year } 00:00:00 GMT`);
  const pickYr = `${now.getFullYear()-1} - ${now.getFullYear()}`


  try {
    const data = await PickingSchema.aggregate([
      { $match: { "createdAt": {
        '$gte': monthlyStartDate,
        '$lte': now
        }}
      },
      { $group: { "_id": month, 'monthlyPicks' : { '$sum': '$weight'}}}
    ])

    const lastOneYear = await PickingSchema.aggregate([
      {
        $match: { "createdAt": {
          '$gte': annualStartDate,
          '$lte': now
        }}
      },{
        $group: { "_id": pickYr, 'lastOneYear': { '$sum': "$weight"}}
      }

    ])

    const eachMonthTotal = await PickingSchema.aggregate([
      {
        $match: { 'createdAt': {
          '$gte': monthlyStartDate,
          '$lte': now
        }}
      },
      {
        $group: {
          _id: { 
             $month: '$createdAt' ,
          },
          weight: { $sum: '$weight'},
        }
      },{
        
        $sort: { _id: 1}
      }
    ]);

    const monthlyExpenses = await Expenses.aggregate([
      { $match : {"createdAt": {
          '$gte': monthlyStartDate,
          '$lte': now
      }}},
      { $group: {
        "_id": '', 'monthlyExpenses': { '$sum': '$amount'}
      }}
    ])

    const annualExpenses = await Expenses.aggregate([
      { $match: { 'createdAt': {
        '$gte': annualStartDate,
        '$lte': now
      }}},
      // {
      //   $project: {    
      //     month: { $month: '$createdAt' },
      //     year: { $year: '$createdAt' },
      //     amount: 1
      //   }
      // },
      {
        $group: { _id: 
        {
          month: { $month: '$createdAt' },
          // year: { $year: '$createdAt' }
        }, 'annualExpenses': { '$sum': '$amount' }
      }
      }
    ]);

    const eachMonthExpenses = await Expenses.aggregate([
      {
        $match: { 'createdAt': {
          '$gte': annualStartDate,
          '$lte': now
        }}
      },
      {
        $group: {
          _id: { 
            $month: '$createdAt' 
            // year: { $year: '$createdAt' },
          },
          amount: { $sum: '$amount' },
        }
      }
    ])

    const eachYearPicks = await PickingSchema.aggregate([
      {
        $match: { 'createdAt': {
          '$gte': new Date(annualStartDate - (365 * 24 * 60 * 60 * 1000)),
          '$lte': now
        }}
      },
      {
        $group: {
          _id: {
            $year: '$createdAt'
          },
          weight: { $sum: '$weight' }
        }
      }
    ]);

    const eachYearExpenses = await Expenses.aggregate([
      {
        $match: { 'createdAt': {
          '$gte': new Date(annualStartDate - ( 365 * 24 * 60 * 60 * 1000)),
          '$lte': now
        }}
      }, {
        $group: {
          _id: {
            $year: '$createdAt'
          },
          amount: { $sum: '$amount' }
        }
      }
    ])

    // console.log(eachYearExpenses);
    // console.log({'annualStartDate': (now.getMonth() < 6 ) })
    res.status(200).json({ 
      data, lastOneYear, monthlyExpenses,
      annualExpenses, eachMonthExpenses, 
      eachMonthTotal, eachYearPicks, eachYearExpenses
    });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error});
  }

}
