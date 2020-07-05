'use strict';

module.exports.soma = (event, context, callback) => {

  const data = event.queryStringParameters

  if (!data || !data.a || !data.b) {

    callback(null, { statusCode: 200, body: JSON.stringify({ resultado: "Parâmetro inválidos" }) })
  }

  const resultado = { resultado: ((data.a * 1) + (data.b * 1)) }

  callback(null, { statusCode: 200, body: JSON.stringify(resultado) })
}