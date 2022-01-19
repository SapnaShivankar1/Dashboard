export const dbKeyGenerator = (Email :string) :string => {
    let dbkey = Email.split('@')[0];
    let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    format.test(dbkey);
    dbkey = dbkey.replace(format,'');
    return dbkey;
   }