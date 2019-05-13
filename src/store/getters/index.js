export default{
    getCount(state){
        if(state.count <= 0){
            return "不合理"
        }
        return state.count;
    }
}