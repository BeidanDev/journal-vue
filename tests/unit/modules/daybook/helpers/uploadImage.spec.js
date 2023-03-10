import cloudinary from 'cloudinary';
import axios from 'axios';

import uploadImage from '@/modules/daybook/helpers/uploadImage';

// keys
cloudinary.config({
    cloud_name: '',
    api_key: '',
    api_secret: ''
});

describe('Pruebas en el uploadImage', () => {
    test('debe de cargar un archivo y retornar el url', async(done) => {
        // Endpoint cloudinary
        const { data } = await axios.get('', {
            responseType: 'arraybuffer'
        });

        const file = new File([data], 'foto.jpg');

        const url = await uploadImage(file);

        expect(typeof url).toBe('string');

        // Tomar el ID
        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.jpg', '');

        cloudinary.v2.api.delete_resources(imageId, {}, () => {
            done();
        });
    });
});