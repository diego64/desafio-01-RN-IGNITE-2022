import { View, Text, FlatList } from 'react-native';
import { useState } from 'react';

import { styles } from './styles';

import { Header } from '../../components/Header';
import { Task } from '../../components/Task';
import { Empty } from '../../components/Empty';

import { TaskDTO } from '../../dtos/TaskDTO';

export function Home() {
  const [tasks, setTasks] = useState<TaskDTO[]>([])

  return(
    <View style={styles.container}>
      <Header />
      <View style={styles.tasksTitle}>
        <View style={styles.info}>
          <View style={styles.row}>
            <Text style={styles.tasksCreated}>Criadas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>0</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.tasksDone}>Concluídas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>0</Text>
            </View>
          </View>
        </View>

        <FlatList 
          data={tasks}
          keyExtractor={(tasks) => tasks.id!}
          renderItem={({ item }) => (
            <Task 
              key={item.id}
              isCompleted={item.isCompleted}
              title={item.title}
            />
          )}
          ListEmptyComponent={<Empty />}
        />
      </View>
    </View>
  )
}