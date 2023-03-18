import 'package:chatgpt_hackathon/controllers/MainController.dart';
import 'package:chatgpt_hackathon/views/homePage/components/task_card.dart';
import 'package:chatgpt_hackathon/views/styles.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class TaskTable extends GetView<MainController> {
  const TaskTable({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: Get.height * 0.3,
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        boxShadow: const [BoxShadow(color: Colors.black12, blurRadius: 10)],
      ),
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text("المهام",
                    style: TextStyle(
                      color: AppColors.secondary,
                      fontWeight: FontWeight.bold,
                      fontSize: 24,
                    )),
                Text(
                  "الاثنين، 26 سبتمبر",
                  style: TextStyle(
                    color: AppColors.primary,
                    fontSize: 20,
                  ),
                ),
              ],
            ),
          ),
          TaskCard(
            taskData: controller.taskData[0],
          ),
          TaskCard(
            taskData: controller.taskData[1],
          ),
          TaskCard(
            taskData: controller.taskData[2],
          ),
        ],
      ),
    );
  }
}
