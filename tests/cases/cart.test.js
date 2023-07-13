describe('Pizza Cart testing facility', function(){
    it('should test the function allows a user to order a small pizza', function(){
        let sampleCart = Cart();
        assert.equal(0, sampleCart.totalAmountDue);
    })
})