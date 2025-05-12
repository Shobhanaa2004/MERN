const user =  require ('../models/User.js')

exports.register=async (req,res)=>{
    const newuser = new user(req.body);
    const saveduser=await newuser.save();
    res.json(saveduser);
}

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const userr = await user.findOne({ username });
        if (!userr) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (userr.password !== password) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        res.json({ message: 'Login successful', userr });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};


