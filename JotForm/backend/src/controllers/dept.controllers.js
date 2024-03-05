import { Dept } from "../model/dept.model.js";
import {asyncHandler} from '../utils/asyncHandler.js'
import {ApiResponse} from '../utils/ApiResponse.js'
import { Table } from "../model/table.model.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

const fetchDept = asyncHandler(async (req, res) => {
    const posts = await Dept.find();
    console.log(posts);
  
    return res
      .status(200)
      .json(new ApiResponse(200, posts, "Posts fetched successfully"));
  });

const getTables = asyncHandler(async (req, res) => {
    const tableId = req.params.id
    const posts = await Table.findById(tableId);
    console.log(posts);
  
    return res
      .status(200)
      .json(new ApiResponse(200, posts, "Posts fetched successfully"));
  });
const addEntry = asyncHandler( async (req, res) => {
    console.log('1');

    const {
    Approval,
    Name,
    USN,
    Status,
    Age,
    Dept,
    HOD,
    Contact,
    tableId
    } = req.body
    //console.log("email: ", email);

  console.log('2');
    const doc = req.files.Document[0].path;
    console.log(doc);

    
    const file = await uploadOnCloudinary(doc)


    // if (!profileImg) {
    //     throw new ApiError(400, "Image file is required")
    // }
   

    const rowContent = {
        "Approval": Approval,
    "Name": Name,
    "USN": USN,
    "Status": Status,
    "Age":Age,
    "Dept": Dept,
    "HOD": HOD,
    "Contact": Contact,
        "Document": file.url,
        // createdBy: req?.user._id
    }
    const t = await Table.findByIdAndUpdate("65e5cdad3b6358b28d3c303d",
        {
            $push: {
                rowContent: rowContent,
            }
        },{ new: true }
    )
        console.log(t);

    // const createdProject = await Project.findById(project._id)

    // if (!createdProject) {
    //     throw new ApiError(500, "Something went wrong while registering the user")
    // }

    return res.status(201).json(
        new ApiResponse(200, "Project added Successfully")
    )

} )
const deleteEntry = asyncHandler(async (req, res) => {
    const {USN,tableId} = req.body;
    console.log(USN);
    const updatedTable = await Table.findByIdAndUpdate(
        tableId,
        {
            $pull: { rowContent: { USN: USN.USN } }
        },
        { new: true }
    );
  
    return res
      .status(200)
      .json(new ApiResponse(200, updatedTable, "Post deleted successfully"));
  }); 

// const updatePost = asyncHandler(async (req, res) => {
//     const { title, desc, tags } = req.body;
  
//     const post = await Post.findByIdAndUpdate(
//       req.params?.id,
//       {
//         $set: {
//           title: title,
//           desc: desc,
//           tags: tags,
//         },
//       },
//       { new: true }
//     );
//     return res
//       .status(200)
//       .json(new ApiResponse(200, post, "Posts details updated succesfully"));
//   });
export { fetchDept, getTables, addEntry, deleteEntry};
