---
id: android-publish-error
title: Your Android App Bundle is signed with the wrong key
sidebar_label: Playstore Upload Key Error
sidebar_position: 4

---
I’ve just built an aab bundle from expo, and I’m receiving this error when uploading the aab bundle onto the play store:

> Your Android App Bundle is signed with the wrong key. Ensure that your App Bundle is signed with the correct signing key and try again

Here are the steps I followed to fix this:

1. Download the upload certificate from expo servers. Execute the below command on the project directory and follow the prompt below

       eas credentials

√ What do you want to do? » Download Keystore from the Expo servers

√ What do you want to do? » Download existing Keystore

Finally, Quit the prompt.

1. Execute the following command to generate an upload certificate(.pem file) from downloaded Keystore file(.jks) from expo servers.

       keytool -export -rfc -alias YOUR-ALIAS-HERE -file upload_certificate.pem -keystore YOUR_KEY_STORE_FILE.jks
2. Share the PEM file with Google Support, requesting them to update it with the new PEM file. Google will take approximately 3 days to update and intimate you over email when the Keystore is ready to become usable.