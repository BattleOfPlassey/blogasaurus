---
id: android-publish-error
title: Your Android App Bundle is signed with the wrong key
sidebar_label: Playstore Upload Key Error
sidebar_position: 4

---
I’ve just built an aab bundle from expo, and I’m receiving this error when uploading the aab bundle onto the play store:

> Your Android App Bundle is signed with the wrong key. Ensure that your App Bundle is signed with the correct signing key and try again: —MY SHA KEY HERE—

eas credentials

√ What do you want to do? » Download Keystore from the Expo servers

√ What do you want to do? » Download existing keystore

Quit

keytool -export -rfc -alias <—MY ALIAS KEY HERE—> -file <upload_certificate.pem> -keystore <keystore file here>.jks

I have resolved the problem.  
My approach: Download the upload certificate from expo servers, and share the same with the Google Support, requesting them to update with the new PEM file.

eas submit -p android --latest