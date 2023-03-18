import 'package:chatgpt_hackathon/controllers/MainController.dart';
import 'package:chatgpt_hackathon/views/routes/router_name.dart';
import 'package:chatgpt_hackathon/views/styles.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    Get.put(MainController());
    return GetMaterialApp(
      debugShowCheckedModeBanner: false,
      getPages: routerApp,
      locale: const Locale("ar", "SA"),
      initialRoute: Routes.appNviagator,
      theme: appTheme(),
    );
  }
}
