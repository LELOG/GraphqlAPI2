const getUser = async (parents,args)=>{
    console.log(args);
    return {
        fid:1,
        fname:"张叔叔",
        fage:26
    }
}
const getUserList = async (parents,args)=>{
    console.log(args)
    return [{
        fid:1,
        fname:"张三",
        fage:26
    },{
        fid:2,
        fname:"李四",
        fage:27
    }]
}
const getBook = async (parents,args)=>{
    console.log(args)
    return 22
}
module.exports = {
    getUser,
    getUserList,
    getBook
}