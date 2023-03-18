import 'package:chatgpt_hackathon/controllers/MainController.dart';
import 'package:chatgpt_hackathon/views/chat_bot_icons.dart';
import 'package:chatgpt_hackathon/views/homePage/home_page.dart';
import 'package:chatgpt_hackathon/views/settingPage/setting_page.dart';
import 'package:chatgpt_hackathon/views/styles.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class AppNavigator extends GetView<MainController> {
  const AppNavigator({super.key});

  final screens = const [
    HomePage(),
    SettingPage(),
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          //TODO: Talk to the bot
        },
        backgroundColor: AppColors.white,
        elevation: 0,
        child: Container(
          padding: const EdgeInsets.only(right: 8),
          alignment: Alignment.center,
          child: Icon(
            ChatBot.logo_1,
            color: AppColors.primary,
            size: 40,
          ),
        ),
      ),
      body: Obx(
        () => IndexedStack(
          index: controller.pageIndex.value,
          children: screens,
        ),
      ),
      bottomNavigationBar: BottomAppBar(
        notchMargin: 5.0,
        shape: const CircularNotchedRectangle(),
        color: AppColors.white,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            IconButton(
              icon: Icon(
                Icons.apps,
                size: 32,
                color: AppColors.primary,
              ),
              onPressed: () {
                controller.changePageTo(0);
              },
            ),
            IconButton(
              icon: Icon(
                Icons.settings,
                size: 32,
                color: AppColors.primary,
              ),
              onPressed: () {
                controller.changePageTo(1);
              },
            ),
          ],
        ),
      ),
    );
  }
}
