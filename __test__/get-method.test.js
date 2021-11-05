const getMethod = require('../lib/get-method.js');

describe('tests getMethod', () => {
  it('returns GET method', () => {
    // define a new get http request string
    const httpRequest =  `GET / HTTP/1.1
Host: example.com
Accept-Language: us-en`;

    // declare a variable to hold a getMethod call passing in newHttpRequest
    const method = getMethod(httpRequest);

    // expect method to equal 'GET'
    expect(method).toEqual('GET');
  });

  it('returns DELETE method', () => {
    // define a new delete http request string
    const httpRequest =  `DELETE / HTTP/1.1
Host: example.com
Accept-Language: us-en`;

    // declare a variable to hold a getMethod call passing in newHttpRequest
    const method = getMethod(httpRequest);

    // expect getMethodResult to equal 'DELETE'
    expect(method).toEqual('DELETE');
  });

  it('returns invalid method message', () => {
    // define a new delete http request string
    const httpRequest =  `PUST / HTTP/1.1
Host: example.com
Accept-Language: us-en`;

    // declare a variable to hold a getMethod call passing in newHttpRequest
    const method = getMethod(httpRequest);

    // expect getMethodResult to equal 'DELETE'
    expect(method).toEqual('invalid method');
  });


});
