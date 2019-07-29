const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch (env) {
        case 'dev':
        return {
            bd_string: 'BD STRING'
        }

        case 'hml':
        return {    
            bd_string: 'BD STRING'
        }

        case 'prod':
        return {
            bd_string: 'BD STRING'
        }
    }
}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();