import jwt from 'jsonwebtoken';

// create token
const CreateToken = (data, expire = '3d') => {

    return jwt.sign({ data }, process.env.JWT_SECRET, {
        expiresIn : expire
    });

}

export default CreateToken;