class Kyc {
    private docType : string
    private aadharNo : string
    private panNo : string

    constructor(builder : KycBuilder) {
        this.docType = builder.docType
        this.aadharNo = builder.aadharNo
        this.panNo = builder.panNo
    }
}

class KycBuilder{
    docType : string
    aadharNo : string
    panNo : string

    setDocType(doc : string){
        this.docType = doc;
        return this;
    }

    setAadhar(a : string){
        this.aadharNo = a;
        return this;
    }

    setPan(p : string){
        this.panNo = p;
        return this;
    }

    build(){
        return new Kyc(this);
    }
}

function testBuilder(){
    const aadhar = new KycBuilder().setDocType('A').setAadhar('1234').build();
    const pan = new KycBuilder().setDocType('P').setPan('ABCD').build();
}

testBuilder();