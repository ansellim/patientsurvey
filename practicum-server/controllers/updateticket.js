import Feedback from "../models/feedback.js";

export const updateticket = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "PUT, POST, GET, DELETE, PATCH, OPTIONS"
    );
    try {
      const data = req.body.body;
      const ticketstatus = JSON.parse(data).ticketstatus;
      const ticketId = JSON.parse(data).ticketId.replace("Ticket ", "");
  
      const myitem = await Feedback.findByIdAndUpdate(ticketId, {
        $set:{"survey.specificsurvey.Status": ticketstatus}
      }, {
        new: true,
        runValidators: true
      } );
      //console.log(myitem);
     // const { ticketstatus, ticketId } = JSON.parse(req.body.body);
      //console.log(JSON.parse(data).ticketstatus,JSON.parse(data).ticketId);
   //   ticketId = ticketId.replace("Ticket ", "");
      //console.log(ticketId);
      //await axios.put(data);
     // res.status(201).json(newFeedback);
     
     // res.send('_id' + ticketId);    
     res.status(200).json(myitem);
   //   console.log(res);
    } catch (error) {
      console.log(error);
      res.status(409).json({ message: error.message });
    }
  };
  