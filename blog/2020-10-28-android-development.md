---
slug: android-part
title: Fundamentals of Android Development
authors: [palash_programmer]
tags: [android, development, fundamentals]
draft: true
description: The Android operating system is a multi-user Linux system in which each app is a different user.
hide_table_of_contents: false
image: /img/palash_about-removebg-preview.png
---
Android apps can be written using Kotlin, Java, and C++ languages.
<!--truncate-->

## Basics
The Android SDK(Software Development Kit) tools compile your code along with any data and resource files into an APK, an Android package, which is an archive file with an .apk suffix. One APK file contains all the contents of an Android app and is the file that Android-powered devices use to install the app.

Each Android app lives in its own security sandbox, protected by the following Android security features:

1. The Android operating system is a multi-user Linux system in which each app is a different user.
2. By default, the system assigns each app a unique Linux user ID (the ID is used only by the system and is unknown to the app). The system sets permissions for all the files in an app so that only the user ID assigned to that app can access them.
3. Each process has its own virtual machine (VM), so an app's code runs in isolation from other apps.
4. By default, every app runs in its own Linux process. The Android system starts the process when any of the app's components need to be executed, and then shuts down the process when it's no longer needed or when the system must recover memory for other apps.

The Android system implements the principle of least privilege. That is, each app, by default, has access only to the components that it requires to do its work and no more. This creates a very secure environment in which an app cannot access parts of the system for which it is not given permission. However, there are ways for an app to share data with other apps and for an app to access system services:

1. It's possible to arrange for two apps to share the same Linux user ID, in which case they are able to access each other's files. To conserve system resources, apps with the same user ID can also arrange to run in the same Linux process and share the same VM. The apps must also be signed with the same certificate.
2. An app can request permission to access device data such as the device's location, camera, and Bluetooth connection. The user has to explicitly grant these permissions. 

## App Components
App components are the essential building blocks of an Android app. Each component is an entry point through which the system or a user can enter your app. Some components depend on others.

There are four different types of app components:

1. Activities
2. Services
3. Broadcast receivers
4. Content providers.

Each type serves a distinct purpose and has a distinct lifecycle that defines how the component is created and destroyed. In the next part we will see the four types of app components.


## Roadmap for Android Development in 2021
1. Choose between 2 Programming Java or Kotlin. You need to know the core of Java to work with Kotlin. All the new code is being written in Kotlin in major Organizations.

2. Study the OOPs methodology especially Interfaces, Overrides, Callbacks ,Lambda functions, Generics, and Collections.

3. Study the 2 out of 4 major components of Android Development i.e. Activities and Services as they are 60% of an Android App. Read About Activity Lifecycle which is very important . The other 2 being Broadcast Receivers and Content Providers can be covered later after you have mastered all the below listed points.

4. Read about Layouts which represent UI which you see on your Android Devices when you launch them, Different types of Layout i.e. LinearLayout, RelativeLayout, FrameLayout, ConstraintLayout. Several View elements like Button, ImageView, TextView, EditText etc. Intents , Types of Intent (Implicit & Explicit).

5. Complex UI elements like List View, RecyclerView , Toast , Spinner ,Dialogues , Snackbar and finally Fragments and their lifecycle,

6. Read how UI Resources like Drawables , String , Styles are used and referenced.

7. Read about how an Android App makes a simple HTTP request like GET and POST with the help of several third party libraries like okHTTP, Retrofit, Volley, Apollo, Glide. 

8. Learn how Gradle works and how we add dependencies. 

9. Look at File Systems and Database library like mysqllite and RoomDB and perform CRUD operations.

10. Learn how android treat Media in Local and Online , for e.g. playing audio in the background while the app is minimized. Read about exoplayer for video playback. Checkout Camera functions, Taking photo, storing photo.

11. Study the advanced topics of Architecture like MVVM, MVI ,MVP and Dependency Injection by Dagger . Multithreading , Coroutines , Android Jetpack.

12. Optional Behavior Components like

* Download Manager
* Media Playback
* Notification
* Permissions
* Preference
* Sharing
* Slice

13. Firebase features for User Authentication, Realtime Database, Notification, etc

14. App Release Concepts like

* .keystore file
* App Bundle
* Playstore


> Shantih     Shantih     Shantih